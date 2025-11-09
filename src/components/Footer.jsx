export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] py-10 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} .mayoni. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#works" className="hover:text-white">Works</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
