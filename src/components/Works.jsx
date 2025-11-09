export default function Works() {
  const items = [
    {
      year: "2023",
      title: "Debut collaboration in Malayalam industry",
      role: "Vocalist",
      notes: "With composer Gopi Sundar — add title/year",
      link: "#",
    },
    {
      year: "2024",
      title: "Live at Bacchus Lounge",
      role: "Headliner",
      notes: "Kochi — add exact date",
      link: "#",
    },
    {
      year: "2024",
      title: "Cover performances",
      role: "Featured video",
      notes: "Selected Instagram Reels",
      link: "https://instagram.com/.mayoni.",
    },
  ];

  return (
    <section id="works" className="w-full bg-[#0f172a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Works
          </h2>
          <a
            href="https://instagram.com/.mayoni."
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[#D4AF37] hover:underline"
          >
            See more
          </a>
        </div>
        <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
          {items.map((it, idx) => (
            <a
              key={idx}
              href={it.link}
              target={it.link.startsWith("http") ? "_blank" : undefined}
              rel={it.link.startsWith("http") ? "noreferrer" : undefined}
              className="group block bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="grid gap-3 sm:grid-cols-12 sm:items-center">
                <div className="text-sm text-slate-300 sm:col-span-2">{it.year}</div>
                <div className="sm:col-span-5">
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm text-slate-300">{it.role}</div>
                </div>
                <div className="text-sm text-slate-300 sm:col-span-5">
                  {it.notes}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
