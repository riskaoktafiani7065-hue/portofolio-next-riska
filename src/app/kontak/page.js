export const metadata = {
    title: "Kontak",
    description: "Hubungi Riska Oktafiani melalui form kontak,email,atau Github",
};

export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-3 text-lg text-gray-700">
                Punya pertanyaan atau ingin bekerja sama? isi form berikut.
            </p>

            <div className="flex flex-row gap-6">
                <section className="mx-auto w-100 mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2">
                    <form className="space-y-4">
                        <div>
                            <label
                            htmlFor="nama"
                            className="block font-bold text-gray-800"
                            >
                                Nama Lengkap 
                            </label>
                            <input
                            type="text" 
                            id="name"
                            name="nama"
                            placeholder="Contoh Riska Oktafiani"
                            required 
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>
                        <div>
                            <label
                            htmlFor="email"
                            className="block font-bold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="nama@gmail.com"
                            required 
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>
                        <div>
                            <label
                            htmlFor="nomor"
                            className="block font-bold text-gray-800"
                            >
                                Nomor HP
                            </label>
                            <input 
                            type="text"
                            id="nomor"
                            name="nomor"
                            placeholder="081234567890"
                            required 
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            />
                        </div>
                        <div>
                            <label 
                             htmlFor="keperluan"
                             className="block font-semibold"
                            >
                                Keperluan
                            </label>
                            <select
                             id="keperluan" 
                             name="keperluan" 
                             defaultValue=""
                             className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                            > 
                                <option value="" disabled >-- Pilih keperluan --</option>
                                <option value="bisnis">Bisnis</option>
                                <option value="pribadi">Pribadi</option>
                                <option value="pribadi">Saran</option>
                                <option value="lainnya">Lainnya</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="pesan"
                                className="block font-bold text-gray-800"
                            >
                                Pesan
                            </label>

                            <textarea
                                id="pesan"
                                name="pesan"
                                rows={5}
                                placeholder="Tulis pesanmu di sini"
                                required
                                className="mt-1 w-full resize-y rounded-lg border border-gray-300 bg-white p-2 outline-none focus:border-utama focus:ring-1 focus:ring-utama"
                            />
                        </div>
                        <button
                         type="submit"
                         className="rounded-lg bg-red-700 px-4 py-2 font-semibold text-white transition hover:bg-red-800"
                        >
                            Kirim Pesan
                        </button>
                    </form>
                </section>
            

                <aside className="mx-auto w-70 mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2">
                    <h3 className="font-bold text-xl">Temukan saya di </h3>
                    <ul>
                        <li 
                         className="font-semibold text-aksen mt-3"
                        >
                            <a 
                             href="https://github.com/riskaoktafiani7065-hue"
                            >
                                Github
                            </a>
                        </li>
                        <li className="font-semibold text-aksen">
                            riskaoktafiani7065@gmail.com
                        </li>
                    </ul>
                </aside>
            </div>
        </main>
    );
}