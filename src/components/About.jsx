export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 text-slate-800">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1A2437] sm:text-4xl">
          About
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          Priya Nair, professionally known as <span className="font-semibold">.mayoni.</span>, is a dynamic singer–dancer–performer based in India (update with city). With an active social presence (7.9K+ followers), she blends soulful vocals with engaging stagecraft across genres and languages. Her debut in the Malayalam music industry was marked by a collaboration with composer <span className="font-semibold">Gopi Sundar</span>, followed by headline and featured live sets across select venues including Bacchus Lounge, Kochi.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-[#1A2437]">Fast facts</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Base: <span className="italic">Add city</span></li>
              <li>Years active: <span className="italic">Add years</span></li>
              <li>Genres/Languages: <span className="italic">Add styles</span></li>
              <li>Training/Awards: <span className="italic">Add background</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-[#1A2437]">Representation</h3>
            <ul className="mt-3 space-y-1 text-slate-700">
              <li>Agent/Manager: <span className="italic">Add name</span></li>
              <li>Email: <span className="italic">Add email</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
