"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 bg-card p-2";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com";
    }
    if (nomor.length < 10) {
      errorBaru.nomor = "Nomor HP minimal 10 angka.";
    }
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan anda!";
    }
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);

    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      <div>
        <label htmlFor="nama" className="block font-semibold text-foreground">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Riska Oktafiani"
          className={kelasInput}
        />
        {error.nama && <p className="mt-1 text-sm text-aksen">{error.nama}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold text-foreground">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contoh: nama@gmail.com"
          className={kelasInput}
        />
        {error.email && (
          <p className="mt-1 text-sm text-aksen">{error.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="nomor" className="block font-bold text-foreground">
          Nomor HP
        </label>
        <input
          type="text"
          id="nomor"
          name="nomor"
          value={nomor}
          onChange={(e) => setNomor(e.target.value)}
          placeholder="Contoh: 0812-3456-7890"
          required
          className={kelasInput}
        />
        {error.nomor && <p className="mt-1 text-sm text-aksen">{error.nomor}</p>}
      </div>
      <div>
        <label htmlFor="keperluan" className="block font-semibold">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="" disabled>
            -- Pilih keperluan --
          </option>
          <option value="bisnis">Bisnis</option>
          <option value="pribadi">Pribadi</option>
          <option value="saran">Saran</option>
          <option value="lainnya">Lainnya</option>
        </select>
        {error.keperluan && <p className="mt-1 text-sm text-aksen">{error.keperluan}</p>}
      </div>
      <div>
        <label htmlFor="pesan" className="block font-bold text-foreground">
          Pesan
        </label>

        <textarea
          id="pesan"
          name="pesan"
          value={pesan}
          rows={5}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesanmu di sini"
          required
          className={kelasInput}
        />
      </div>
      {error.pesan && <p className="mt-1 text-sm text-aksen">{error.pesan}</p>}
      <Button
        type="submit"
        size="lg"
      >
        Kirim Pesan
      </Button>

      {berhasil && (
        <p className="mt-2 rounded-lg bg-green-800 px-4 py-3 text-green-100">
          Terima kasih, {nama}! Pesan anda sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  );
}
