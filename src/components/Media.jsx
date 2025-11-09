import { Play } from "lucide-react";

export default function Media() {
  return (
    <section id="media" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A2437] sm:text-4xl">Latest Release</h2>
          <a
            href="https://www.instagram.com/_.mayoni._?igsh=MWp4dTQ4MWVwN2E3eQ=="
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[#1A2437] hover:underline"
          >
            Follow on Instagram
          </a>
        </div>

        {/* Instagram post/video embed via iframe. For reels, Instagram oEmbed works with the post URL */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              title="Instagram Video"
              src="https://www.instagram.com/_.mayoni._/embed"
              className="h-full w-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-sm text-slate-600">Latest song video from Instagram</div>
            <a
              href="https://www.instagram.com/_.mayoni._?igsh=MWp4dTQ4MWVwN2E3eQ=="
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#1A2437] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#111b2e]"
            >
              <Play size={14} /> Watch on Instagram
            </a>
          </div>
        </div>

        {/* Optional: add more embeds like YouTube or Spotify */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-[#1A2437]">YouTube</h3>
            <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed?listType=search&list=.mayoni."
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-[#1A2437]">Spotify</h3>
            <div className="mt-3 overflow-hidden rounded-lg">
              <iframe
                src="https://open.spotify.com/embed/artist/"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify player"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
