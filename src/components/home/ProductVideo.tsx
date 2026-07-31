"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Product video placeholder. Click reveals a YouTube embed (facade pattern —
 * no iframe until the user opts in, so it doesn't cost anything on load).
 */
export function ProductVideo({ videoId = "" }: { videoId?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-digital-blue-100 bg-digital-blue-950 shadow-lg">
          {playing && videoId ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
              title="TechIT Network product overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-digital-blue-800 to-digital-blue-950"
              aria-label="Play product overview video"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform group-hover:scale-110">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Play className="ml-1 h-6 w-6 fill-digital-blue-600 text-digital-blue-600" />
                </span>
              </span>
              <span className="text-sm font-medium text-digital-blue-100">
                Watch the 2-minute product overview
              </span>
              {!videoId && (
                <span className="text-xs text-digital-blue-300">(Video coming soon)</span>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
