import Kartu from "@/components/Kartu";
import { supabase } from "@/lib/supabase";

export const metadata = {
    title: "Tentang",
    description: "Cerita, hobi, cita-cita, dan jadwal belajar Riska Oktafiani.",
};

const hobi = [
  "Menonton Drakor",
  "Membaca AU",
  "Mendengarkan Musik"
];

const rencana = [
  "Mengikuti Kelas Industri UBIG sampai Lulus ",
  "PKL di perusahaan dikota Malang",
  "Bisa bekerja sesuai bidang keahlian saya",
];


export default async function Tentang() {
  const { data: jadwalBelajar } = await supabase
     .from("jadwal")
     .select("*")
     .order("id");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary md:text-4xl">Tentang Saya</h1>
      <div className="mt-10 space-y-6">
        <Kartu judul="Perkenalan">
          <div className="text-utama dark:text-gray-300">
            <p className="leading-relaxed">
              Saya tinggal di kota pasuruan ,
            </p>
            <p>Saya adalah seorang siswa di SMKN 1 Pasuruan jurusan Rekayasa Perangkat Lunak yang saat ini sedang belajar dan menjelajahi dunia pemrograman.</p>
            </div>
        </Kartu>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Kartu judul="Hobi">
                  <ul className="list-disc list-inside space-y-1 text-utama dark:text-gray-300">
                    {hobi.map((hobi, index) => (
                      <li key={index}>{hobi}</li>
                    ))}
                  </ul>
                </Kartu>
      
                <Kartu judul="Cita-cita">
                  <p className="mb-2 text-utama dark:text-gray-300">
                    Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang saya rencanakan:
                  </p>
                  <ol className="list-desimal list-inside space-y-1 text-utama dark:text-gray-300">
                    {rencana.map((rencana, index) => (
                      <li key={index}>{rencana}</li>
                    ))}
                  </ol>
                </Kartu>
              </div>
            </div>
      
      
            <div className="mt-6">
              <Kartu judul="Jadwal Belajar">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-blue-950">
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-2 px-4 text-white">Hari</th>
                        <th className="py-2 px-4 text-white">Waktu</th>
                        <th className="py-2 px-4 text-white">Kegiatan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jadwalBelajar && jadwalBelajar.map((item, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="py-2 px-4 font-medium text-utama dark:text-gray-300">{item.Hari}</td>
                          <td className="py-2 px-4 text-utama dark:text-gray-300">{item.waktu}</td>
                          <td className="py-2 px-4 text-utama dark:text-gray-300">{item.kegiatan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Kartu>
            </div>
    </main>
  );
}