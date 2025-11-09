export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-slate-200 p-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A2437] sm:text-4xl">
            Contact & Booking
          </h2>
          <p className="mt-4 text-slate-700">
            For bookings, collaborations, and media inquiries, reach out below.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  Email: <span className="italic">add@email.com</span>
                </p>
                <p>
                  Instagram: <a className="text-[#1A2437] underline" href="https://instagram.com/.mayoni." target="_blank" rel="noreferrer">@.mayoni.</a>
                </p>
                <p>
                  Management/Agency: <span className="italic">Add details</span>
                </p>
                <p>
                  Availability: India and international — corporate shows, concerts, festivals.
                </p>
                <p>
                  Technical Rider: <span className="italic">Link a PDF</span>
                </p>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-800">Name</label>
                <input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#D4AF37] focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-800">Email</label>
                <input type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#D4AF37] focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-800">Message</label>
                <textarea rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-[#D4AF37] focus:outline-none" placeholder="Tell us about your event" />
              </div>
              <button type="button" className="inline-flex items-center rounded-md bg-[#1A2437] px-5 py-2 text-sm font-semibold text-white hover:bg-[#111b2e]">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
