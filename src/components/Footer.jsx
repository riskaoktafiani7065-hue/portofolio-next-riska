export default function Footer() {
    return(
        <footer className="mt-auto bg-utama p-6 text-center text-latar">
            <p className="text-sm text-slate-300">
                &copy; {new Date().getFullYear()} Riska Oktafiani. Dibuat dengan Next.js di Kelas Industri UBIG.
            </p>
        </footer>
    );
}