import type { Metadata } from "next";
import Link from "next/link";

import { ecosystemMap, palette, principles, services } from "../../services";
import { SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Visual system & ecosystem map — NovaGo prototyping",
  description:
    "The palette, the recurring components, and the map of how the five NovaGo services hand off to each other.",
};

export default function SystemPage() {
  const first = services[0];

  return (
    <main className="service-page">
      <SiteHeader />

      <article className="service-body">
        <Link className="back-link" href="/#prototype">
          <span aria-hidden="true">←</span> Back to the case study
        </Link>

        <header className="service-head">
          <h1>
            Calm enough to reassure.
            <br />
            <em>Bright enough to invite.</em>
          </h1>
          <p className="lead">
            Deep navy creates clarity; luminous blue signals action; soft colour
            washes differentiate services without making the system feel
            administrative.
          </p>
        </header>

        <section className="service-block">
          <h2>Ecosystem map</h2>
          <p className="lead">
            How the five services hand off to each other across one newcomer
            journey.
          </p>
          {ecosystemMap ? (
            /* The map is far wider than the column, so the labels are only
               legible at full size — the link opens the source image. */
            <a
              className="system-map-link"
              href={ecosystemMap}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="system-map"
                src={ecosystemMap}
                alt="Ecosystem map showing how the five NovaGo services hand off to each other"
              />
              <span className="system-map-cta">
                Open full size
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          ) : (
            <div className="proto-slot">
              <span>Ecosystem map</span>
            </div>
          )}
        </section>

        <section className="service-block">
          <h2>Palette</h2>
          <p className="lead">
            One navy for structure, one blue for action, and five service
            washes that stay light enough to sit under content.
          </p>
          <ul className="palette-grid">
            {palette.map((swatch) => (
              <li key={swatch.hex}>
                <span style={{ background: swatch.hex }} />
                <strong>{swatch.name}</strong>
                <small>{swatch.hex}</small>
              </li>
            ))}
          </ul>
        </section>

        <section className="service-block">
          <h2>Recurring patterns</h2>
          <ul className="principle-list">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </section>

        <nav className="service-nav" aria-label="Services">
          <Link href="/#prototype">
            <span aria-hidden="true">←</span>
            <span>Case study</span>
          </Link>
          <Link href={`/prototype/${first.slug}`}>
            <span>{first.name}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </article>

      <SiteFooter />
    </main>
  );
}
