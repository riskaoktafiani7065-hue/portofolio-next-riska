import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description:
    "Hubungi Riska Oktafiani melalui form kontak, email, atau Github",
};

export default function Kontak() {
  return (
    <main className="w-full mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">
        Hubungi Saya
      </h1>

      <p className="mt-3 text-lg text-muted-foreground">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card Form Kontak */}
        <Card className="w-full min-w-0 md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        {/* Card Informasi Kontak */}
        <Card className="w-full min-w-0 md:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Temukan Saya di
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/riskaoktafiani7065-hue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-aksen hover:underline"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="mailto:riskaoktafiani@gmail.com"
                  className="font-semibold text-aksen hover:underline"
                >
                  riskaoktafiani@gmail.com
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}