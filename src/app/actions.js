"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function masukKelola(stateSebelum, formData) {
    const pin = formData.get("pin");

    if (pin !== process.env.ADMIN_PIN) {
        return { error: "PIN Salah. Coba lagi." };
    }
    const kue = await cookies();
    kue.set("pin_admin", pin, { httpOnly: true, sameSite: "strict", maxAge: 60 * 60 });
    return {};
}

export async function keluarKelola() {
    const kue = await cookies();
    kue.delete("pin_admin");
}

export async function sematkanPesan(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");
    const sematkan = formData.get("sematkan") === "ya";
    await supabaseAdmin.from("buku_tamu").update({ disematkan: sematkan }).eq("id", id);

    revalidatePath("/kelola");
    revalidatePath("/buku_tamu");
}

export async function hapusPesan(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");
    await supabaseAdmin.from("buku_tamu").delete().eq("id", id);

    revalidatePath("kelola")
    revalidatePath("/buku-tamu");
}

const daftarKategori = ["HTML", "CSS", "JavaScript", "Next.js"];

function bacaProyek(formData) {
    return {
        judul: formData.get("judul").trim(),
        slug: formData.get("slug").trim(),
        kategori: formData.get("kategori").trim(),
        minggu: formData.get("minggu").trim(),
        deskripsi: formData.get("deskripsi").trim(),
        fitur: formData
            .get("fitur")
            .split("\n")
            .map((f) => f.trim())
            .filter((f) => f !== ""),
        gambar_url: formData.get("gambar_url").trim(),
    };
}

function cekProyek(proyek) {
    if (
        proyek.judul === "" ||
        proyek.slug === "" ||
        proyek.deskripsi === ""
    ) {
        return "Judul, slug, dan deskripsi wajib diisi.";
    }

    if (proyek.slug.includes(" ")) {
        return "Slug tidak boleh memakai spasi. Gunakan tanda hubung, contoh: buku-tamu.";
    }

    if (!daftarKategori.includes(proyek.kategori)) {
        return "Kategori harus HTML, UI/UX , JavaScript, atau Next.js.";
    }

    if (!proyek.gambar_url.startsWith("/proyek/")) {
        return "Alamat gambar harus diawali /proyek/, contoh: /proyek/proyek-buku-tamu.png.";
    }

    return "";
}

function perbaruiHalaman(slug) {
    revalidatePath("/");
    revalidatePath("/proyek");
    revalidatePath(`/proyek/${slug}`);
    revalidatePath("/kelola");
}

export async function tambahProyek(stateSebelum, formData) {
    const proyek = bacaProyek(formData);
    if (!(await sudahMasuk())) {
        return { error: "Masukkan PIN dulu di halaman Kelola.", proyek };
    }

    const error = cekProyek(proyek);
    if (error !== "") {
        return { error, proyek };
    }
    const hasil = await supabaseAdmin.from("projects").insert(proyek);
    if (hasil.error) {
        if (hasil.error.code === "23505") {
            return { error: "Slug sudah dipakai proyek lain.", proyek };
        }
        return {
            error: `Proyek gagal disimpan: ${hasil.error.message}`,
            proyek
        };
    }
    perbaruiHalaman(proyek.slug);
    redirect("/kelola");
}

export async function ubahProyek(stateSebelum, formData) {
    const id = formData.get("id");
    const proyek = bacaProyek(formData);

    if (!(await sudahMasuk())) {
        return {
            error: "Masukkan PIN dulu di halaman Kelola.",
            proyek,
        };
    }

    const error = cekProyek(proyek);

    if (error !== "") {
        return { error, proyek };
    }

    const hasil = await supabaseAdmin
        .from("projects")
        .update(proyek)
        .eq("id", id);

    if (hasil.error) {
        if (hasil.error.code === "23505") {
            return {
                error: "Slug sudah dipakai proyek lain.",
                proyek,
            };
        }

        return {
            error: `Proyek gagal diubah: ${hasil.error.message}`,
            proyek,
        };
    }

    perbaruiHalaman(proyek.slug);
    redirect("/kelola");
}

export async function hapusProyek(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");

    await supabaseAdmin
        .from("projects")
        .delete()
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/proyek");
    revalidatePath("/kelola");
}


export async function kirimPesan(stateSebelum, formData) {
    const nama = formData.get("nama").trim();
    const pesan = formData.get("pesan").trim();

    if (nama === "" || pesan === "") {
        return {
            error: "Nama dan pesan wajib diisi.",
            nama,
            pesan,
        };
    }

    const hasil = await supabaseAdmin
        .from("buku_tamu")
        .insert({ nama, pesan });

    if (hasil.error) {
        return {
            error: `Pesan gagal dikirim: ${hasil.error.message}`,
            nama,
            pesan,
        };
    }

    revalidatePath("/buku-tamu");

    return {
        berhasil: "Pesan berhasil dikirim.",
        nama: "",
        pesan: "",
    };
}


export async function kirimKontak(data) {
    const nama = data.nama.trim();
    const email = data.email.trim();
    const pesan = data.pesan.trim();

    if (nama === "") {
        return { error: "Nama wajib diisi." };
    }

    if (!email.includes("@")) {
        return { error: "Email harus memuat tanda @." };
    }

    if (pesan.length < 10) {
        return { error: "Pesan minimal 10 karakter." };
    }

    const hasil = await supabaseAdmin
        .from("messages")
        .insert({ nama, email, pesan });

    if (hasil.error) {
        return {
            error: `Pesan gagal dikirim: ${hasil.error.message}`,
        };
    }

    return { berhasil: "Pesan berhasil dikirim." };
}

