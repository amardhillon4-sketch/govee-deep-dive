import { AdBoard } from "@/components/AdBoard";
import { PriceTable } from "@/components/PriceTable";
import {
  mix,
  nav,
  observedOn,
  patterns,
  platforms,
  sources,
  stats,
  system,
  year,
} from "@/lib/report";

export default function Page() {
  return (
    <>
      <div className="spectrum" />
      <header className="top">
        <a className="brand" href="#top">
          <span className="mark">G</span>
          Govee Deep Dive
        </a>
        <span className="observed">Observed {observedOn}</span>
        <nav className="nav" aria-label="Sections">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main id="top" className="wrap">
        <header className="hero">
          <p className="kicker">Brand and creative report</p>
          <h1>Govee sells the mood of the house, then discounts the hardware.</h1>
          <p className="lede">
            The US store is in a four-day Prime encore that shares a headline
            with Halloween. Open the Meta library on the impression sort and
            the first card is not that film. It is the brand line, Life is
            Colorful, followed by a floor lamp that has been running since June
            2025. The celebrity spot shows up ninth.
          </p>
          <div className="source-row">
            <a href={sources.store}>us.govee.com</a>
            <a href={sources.meta}>Meta, by impressions</a>
            <a href={sources.adspy}>Adspy, by likes</a>
            <a href={sources.archive}>Archive snapshot</a>
          </div>
        </header>

        <section aria-label="Snapshot">
          <div className="stats">
            {stats.map((stat) => (
              <article className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.detail}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="argument">
          <h2>The argument</h2>
          <div className="argument">
            <div className="prose">
              <p>
                Govee spent 2026 trying to leave the gadget aisle. Floor Lamp 3
                talks about lumens, square footage, and a white range wide
                enough to fake daylight. The dog film, directed by Paul Moore,
                treats the lights as another character in the house. Interior
                designers are quoted so the product can sit in a room instead
                of on a spec sheet.
              </p>
              <p>
                The media plan has not fully followed that film. The library URL
                sorted by total impressions, active ads, impressions on or after
                1 August 2026, returns about 1,000 results. The first nine cards
                are copied below in the order the page rendered them on{" "}
                {observedOn}. The cards still do not show a global impression
                total. EU and UK transparency, where it was open, shows
                estimated reach: accounts in that region that saw the ad at
                least once. The first card’s EU reach is 2,039,539.
              </p>
              <p>
                Adspy’s view for advertiser Govee, seen 1 July–30 September
                2026, ordered by total likes, stops at a login. Like counts are
                not guessed. A separate daily archive of the same Facebook page,
                read the same day, still puts the broader active set at 2,075
                ads, 47% of them still images.
              </p>
            </div>
            <aside className="panel">
              <h3>What this page will not pretend</h3>
              <ol>
                <li>No invented like counts from Adspy.</li>
                <li>Reach is only listed where a transparency panel showed it.</li>
                <li>June Prime Day prices stay separate from the October encore.</li>
                <li>Homepage tiles without a length are not treated as the 200 ft kit.</li>
              </ol>
            </aside>
          </div>
        </section>

        <section id="store">
          <h2>What the store is doing this week</h2>
          <p className="section-copy">
            From 8–11 October 2026 PDT the homepage runs two lines at once:
            “One Last Chance to Light Up Halloween” and “Govee Prime Big Deal
            Days Encore.” Outdoor is the aisle they put in the window.
          </p>
          <PriceTable />
        </section>

        <section id="system">
          <h2>The system they repeat</h2>
          <p className="section-copy">
            Six ideas show up across the store, the lamp release, the backlight
            release, and the Halloween film. The ads usually pick one and drop
            the rest.
          </p>
          <div className="grid">
            {system.map((item) => (
              <article className="card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="year">
          <h2>The year they just had</h2>
          <p className="section-copy">
            Dates follow the press datelines. The through-line is entertainment
            IP in summer, design credibility in September, and a Halloween film
            that hands the media plan back to outdoor lights.
          </p>
          <div className="year">
            {year.map((item) => (
              <article className="year-item" key={item.title}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="paid">
          <h2>Paid social, as far as the archive goes</h2>
          <p className="section-copy">
            The mix below is the broader active account from a public daily
            archive, read on {observedOn}: 2,075 ads, longest run 565 days. A
            second refresh the same day said 2,107. The ranked cards under it
            are a different cut, the impression-dated library URL, about 1,000
            results, first nine in page order.
          </p>
          <div className="paid-grid">
            <article className="panel">
              <h3>Media mix</h3>
              {mix.map((item) => (
                <div className="bar" key={item.name}>
                  <span>{item.name}</span>
                  <div className="track" aria-hidden="true">
                    <span style={{ width: `${item.share}%` }} />
                  </div>
                  <span>
                    {item.share}% · {item.count}
                  </span>
                </div>
              ))}
            </article>
            <article className="panel">
              <h3>Where the same ads run</h3>
              {platforms.map((item) => (
                <div className="platform" key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.count.toLocaleString("en-US")}</strong>
                </div>
              ))}
              <p className="caption">
                An ad can run in more than one place, so these do not add up to
                2,075.
              </p>
            </article>
          </div>
          <div className="note">
            Adspy asked for a sign-in before it would show likes. The nine cards
            are the Meta URL’s order. Reach is the EU or UK transparency figure
            where that panel was open: 2,039,539 and 635,580 and 729,271 in the
            EU, and 233,836 in the UK. Meta’s label on those panels: reach is
            not impressions. The other five cards had no such figure.
          </div>
          <AdBoard />
        </section>

        <section id="patterns">
          <h2>What the work is doing</h2>
          <div className="grid">
            {patterns.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <h2>Sources</h2>
          <ul>
            <li>
              <a href={sources.store}>Govee US store</a>, including the outdoor
              collection and newsroom, read {observedOn}.
            </li>
            <li>
              <a href={sources.halloween}>Sarah Michelle Gellar campaign</a>,
              3 October 2026. Category claim: Euromonitor, US household
              permanent outdoor lights, 2025 sales value, research completed
              June 2026.
            </li>
            <li>
              <a href={sources.dog}>Campaign Brief Asia</a> on the dog film,
              25 May 2026.
            </li>
            <li>
              <a href={sources.archive}>AdMakeAI archive of the Meta page</a>,
              read {observedOn}. Active-ad totals move between refreshes.
            </li>
            <li>
              <a href={sources.meta}>Meta Ad Library</a> for page
              110849893092563, active ads, sorted by total impressions, start
              date minimum 1 August 2026.
            </li>
            <li>
              <a href={sources.adspy}>Adspy</a>, advertiser Govee, seen 1 July
              to 30 September 2026, ordered by total likes.
            </li>
          </ul>
          <p>
            Store promises quoted from the homepage: 30-day any-reason refund,
            one-year limited warranty and three years on permanent outdoor
            lights, ship in one business day, delivery in two to six business
            days, lifetime technology support.
          </p>
        </footer>
      </main>
    </>
  );
}
