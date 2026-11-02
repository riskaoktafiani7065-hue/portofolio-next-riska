import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Riska Oktafiani melalui form kontak,email,atau Github",
};

export default function Kontak() {
    return (
        <main className="w-full mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Punya pertanyaan atau ingin bekerja sama? isi form berikut.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <section className="w-full min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:col-span-2">
                    <FormKontak />
                </section>

                <aside className="w-full min-w-0 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:col-span-1">
                    <h3 className="font-bold text-xl">Temukan saya di </h3>
                    <ul>
                        <li 
                         className="font-semibold text-aksen dark:text-red-300 mt-3"
                        >
                            <a 
                             href="https://github.com/riskaoktafiani7065-hue"
                            >
                                Github
                            </a>
                        </li>
                        <li className="font-semibold text-aksen dark:text-red-300">
                            riskaoktafiani7065@gmail.com
                        </li>
                    </ul>
                </aside>
            </div>
        </main>
    );
}