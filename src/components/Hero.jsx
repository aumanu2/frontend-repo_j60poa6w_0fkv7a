import { Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2437] via-[#0f172a] to-[#0b1220]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              .mayoni.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Singer • Dancer • Performer
            </p>
            <p className="mt-6 max-w-xl text-slate-300">
              “Voice that brings the story alive.”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/.mayoni."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#1A2437] px-5 py-2 text-sm font-medium text-white hover:bg-[#1A2437]/70 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <Instagram size={18} />
                @.mayoni.
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-[#0f172a] shadow hover:bg-[#c39a2b] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
              >
                Bookings
              </a>
            </div>
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400&auto=format&fit=crop"
              alt=".mayoni. performing on stage"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 rounded-md bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
              Hero image placeholder — replace with high‑res photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
