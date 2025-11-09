import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1400&auto=format&fit=crop",
    alt: "Live performance on stage",
  },
  {
    src: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=1400&auto=format&fit=crop",
    alt: "Studio session",
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop",
    alt: "Close-up singing",
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop",
    alt: "Live band",
  },
];

export default function InteractiveGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#0f172a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Media Gallery</h2>
          <div className="text-sm text-slate-300">Tap to preview</div>
        </div>

        <div className="grid gap-4 sm:grid-cols-12">
          <div className="sm:col-span-8">
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={images[active].src}
                alt={images[active].alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:col-span-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`group relative aspect-video overflow-hidden rounded-lg border ${
                  active === idx ? "border-[#D4AF37]" : "border-white/10"
                }`}
                aria-label={`Show image ${idx + 1}`}
              >
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
