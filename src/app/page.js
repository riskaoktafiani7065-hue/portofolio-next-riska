import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";
import Footer from "@/components/Footer";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

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

const jadwalBelajar  = [
  {Hari: "Senin", waktu: "19.00 - 22.00", kegiatan: "Mengerjakan tugas dari UBIG"},
  {Hari: "Selasa", waktu: "15.00 - 17.00", kegiatan: "Membuat Video Presentasi"},
  {Hari: "Rabu", waktu: "20.00 ", kegiatan: "Mengumpulkan Tugas UBIG"},
  {Hari: "Kamis", waktu: "19.00 - 22.00", kegiatan: "Meet dan live coding"},
  {Hari: "Minggu", waktu: "19.00 - 22.00", kegiatan: "Mengerjakan tugas untuk hari senin"},
]
export default function Home() {
  return (
    <>
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Riska Oktafiani"
        tagline="Siswa kelas XI SMKN 1 Pasuruan , Junior Web Developer di Kelas Industri UBIG. "
      />

      <div className="mt-10 space-y-6">

        <Kartu judul="Tentang Saya">
          <p className="leading-relaxed">
            Saya tinggal di kota pasuruan ,
          </p>
          <p>Saya adalah seorang siswa di SMKN 1 Pasuruan jurusan Rekayasa Perangkat Lunak yang saat ini sedang belajar dan menjelajahi dunia pemrograman.</p>
        </Kartu>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Kartu judul="Hobi">
            <ul className="list-disc list-inside space-y-1">
              {hobi.map((hobi, index) => (
                <li key={index}>{hobi}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="mb-2">
              Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang saya rencanakan:
            </p>
            <lo className="list-desimal list-inside space-y-1">
              {rencana.map((rencana, index) => (
                <li key={index}>{rencana}</li>
              ))}
            </lo>
          </Kartu>
        </div>
      </div>

      <section className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level}/>
          ))}
        </div>
      </section>

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
                {jadwalBelajar.map((jadwalBelajar, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">{jadwalBelajar.Hari}</td>
                    <td className="py-2 px-4 ">{jadwalBelajar.waktu}</td>
                    <td className="py-2 px-4 ">{jadwalBelajar.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>
      </div>
    </main>

    <Footer/>
    </>
  );
}   