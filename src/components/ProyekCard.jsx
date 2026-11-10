import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function getBadgeVariant(kategori) {
  const warnaKategori = {
    html: "html",
    "next.js" : "nextjs",
    nextjs : "nextjs",
    "ui/ux" : "uiux",
    uiux: "uiux",
    "next.js dasar" : "nextjsdasar",
    nextjsdasar : "nextjsdasar",
  };

  return warnaKategori[String(kategori).toLowerCase()] || "outline";
}
export default function ProyekCard({ proyek }) {
  return (
    <Link href={`/proyek/${proyek.slug}`} className="block rounded-xl hover:shadow-md">
      <Card className="h-full">
        <Image
          src={proyek.gambar_url}
          alt={`Tangkapan layar ${proyek.judul}`}
          width={640}
          height={420}
          loading="eager"
          className="h-auto w-full"
        />
        <CardHeader>
          <Badge variant={getBadgeVariant(proyek.kategori)}>
            {proyek.kategori}
          </Badge>
          <CardTitle className="text-lg text-primary">{proyek.judul}</CardTitle>
          <CardDescription>{proyek.deskripsi}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
