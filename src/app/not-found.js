
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f9ff] px-6 dark:bg-[#061426]">
      <div className="w-full max-w-xl text-center">
        {/* 404 */}
        <p className="text-8xl font-black tracking-tight text-blue-600 md:text-9xl">
          404
        </p>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
           Halaman Tidak Ditemukan
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400">
          project yang kamu cari gaada disini sayangg , maaff yaaa
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/proyek"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            ← Kembali ke Projects
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-[#111827] dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-400"
          >
            Kembali ke Beranda 
          </Link>
        </div>
      </div>
    </main>
  );
}