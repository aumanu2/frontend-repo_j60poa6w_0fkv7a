import { Instagram } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f172a] text-white">
      {/* 3D Spline scene as the visual hero */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlay to improve text contrast; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/40 to-[#0f172a]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">.mayoni.</h1>
            <p className="mt-4 text-lg text-slate-200">Singer • Dancer • Performer</p>
            <p className="mt-6 max-w-xl text-slate-200">Vibrant vocals, dynamic stagecraft, and stories that move.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/_.mayoni._?igsh=MWp4dTQ4MWVwN2E3eQ=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#1A2437]/80 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-[#1A2437] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <Instagram size={18} />
                @_.mayoni._
              </a>
              <a
                href="#media"
                className="inline-flex items-center rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-[#0f172a] shadow transition hover:bg-[#c39a2b] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
              >
                Watch the latest
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Bookings
              </a>
            </div>
          </div>

          <div className="relative hidden h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm md:block sm:h-96">
            <div className="absolute inset-0 grid place-items-center text-center">
              <p className="mx-auto max-w-sm px-6 text-sm text-slate-200">
                Interactive 3D hero powered by Spline. Explore the floating icons behind this content.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
