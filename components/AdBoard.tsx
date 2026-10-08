"use client";

import { useMemo, useState } from "react";
import { rankedAds, type Market } from "@/lib/report";

const filters: { id: Market; label: string }[] = [
  { id: "all", label: "All" },
  { id: "US", label: "US" },
  { id: "EU", label: "EU" },
  { id: "CA", label: "Canada" },
  { id: "UK", label: "UK" },
];

export function AdBoard() {
  const [market, setMarket] = useState<Market>("all");
  const visible = useMemo(
    () => (market === "all" ? rankedAds : rankedAds.filter((ad) => ad.market === market)),
    [market],
  );

  return (
    <div>
      <div className="toolbar">
        <div className="filter" role="group" aria-label="Store market">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={market === filter.id}
              onClick={() => setMarket(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p className="caption">
          {visible.length} of {rankedAds.length} cards
        </p>
      </div>
      <div className="ads">
        {visible.map((ad) => (
          <article className="ad" key={ad.libraryId}>
            <p className="kicker">
              {ad.rank}. {ad.market === "Page" ? "No store domain on the card" : ad.market} ·
              started {ad.started}
            </p>
            <h3>{ad.title}</h3>
            <p>{ad.copy}</p>
            {ad.reach ? (
              <p className="reach">
                <strong>{ad.reach.accounts}</strong>
                <span>
                  {ad.reach.region} reach · accounts that saw it once, not impressions
                </span>
              </p>
            ) : null}
            <p className="caption" style={{ marginTop: 12 }}>
              {ad.landing} · {ad.cta}
            </p>
            <p className="caption">{ad.note}</p>
            <p className="caption">
              <a href={`https://www.facebook.com/ads/library/?id=${ad.libraryId}`}>
                Library ID {ad.libraryId}
              </a>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
