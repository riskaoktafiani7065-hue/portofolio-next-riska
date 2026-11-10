import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-10 md:text-left">
      {/* Foto Profil */}
      <Image
        src="/foto_profil.png"
        alt={`Foto profil ${nama}`}
        width={250}
        height={250}
        priority
        className="h-55 w-55 shrink-0 rounded-full border-4 border-aksen object-cover md:h-62.5 md:w-62.5"
      />

      {/* Informasi Perkenalan */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold text-primary md:text-5xl">
          Halo, Saya {nama}
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {tagline}
        </p>

        {/* Tombol */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link
            href="/proyek"
            className={buttonVariants({ size: "lg" })}
          >
            Lihat Proyek
          </Link>

          <Link
            href="/kontak"
            className={buttonVariants({ variant: "outline" , size: "lg"})}
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}
