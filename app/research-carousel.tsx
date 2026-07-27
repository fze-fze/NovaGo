"use client";

import { useEffect, useRef, useState } from "react";

// Round two focus, one card per service. These are the questions we are going
// to ask and what we are looking for — not findings. Nothing here is presented
// as a participant quote, because round two has not run yet.
//
// Drop research visuals (interview photos, affinity maps, survey charts…)
// into `public/images/research/` and set `image`. An empty string keeps the
// tinted icon placeholder.
// The five analysis artefacts, in the order the course teaches them
// (L4: WHO / WHERE / HOW / WHAT / HOW MUCH). `state` says honestly how far
// each one has got — nothing here claims a finding we have not collected.
//
// Drop artefacts (persona sheets, journey maps, affinity photos, charts) into
// `public/images/research/` and set `image`. Empty keeps the icon placeholder.
// The five analysis outputs, carrying the actual result rather than a
// description of the method.
//
// Drop artefacts (persona sheets, journey maps, affinity photos, charts) into
// `public/images/research/` and set `image`. Empty keeps the icon placeholder.
const slides = [
  {
    number: "01",
    title: "Persona",
    question: "WHO",
    headline: "Alex Chen and Maya Lim",
    lines: [
      "Maya Lim \u00b7 21 \u00b7 exchange student, first semester, lives near campus.",
      "\u201cI do not want to ask basic questions every time, but I also do not know which answer to trust.\u201d",
      "Checks group chats first for speed, then re-checks official pages because she does not fully trust them.",
    ],
    className: "blue",
    icon: "\u25C9",
    image: "",
    imageAlt: "",
  },
  {
    number: "02",
    title: "Journey map",
    question: "WHERE",
    headline: "Payment is the conflict peak",
    lines: [
      "Eight stages from arrival to budget update.",
      "Money, exchange rate, trust and consequence all land at once \u2014 the highest-stress point of the first week.",
      "Commute and course setup sit second: high stress, but recoverable.",
    ],
    className: "violet",
    icon: "\u25D0",
    image: "",
    imageAlt: "",
  },
  {
    number: "03",
    title: "Affinity diagram",
    question: "WHAT",
    headline: "Four themes from round one",
    lines: [
      "Unfamiliar abbreviations \u00b7 scattered official information.",
      "Uncertainty about the next step \u00b7 help that feels costly to ask for.",
      "Clustered by meaning from three students\u2019 notes, labelled in their words.",
    ],
    className: "orange",
    icon: "\u25A8",
    image: "",
    imageAlt: "",
  },
  {
    number: "04",
    title: "Task analysis",
    question: "HOW",
    headline: "Every service cut to three tasks",
    lines: [
      "Pay \u2014 wallet and top up \u00b7 currency exchange \u00b7 QR payment with budget update.",
      "Market \u2014 browse \u00b7 buy or rent safely \u00b7 pickup, return and refund.",
      "Forum \u2014 search answers \u00b7 ask anonymously \u00b7 check source and freshness.",
    ],
    className: "mint",
    icon: "\u25A6",
    image: "",
    imageAlt: "",
  },
  {
    number: "05",
    title: "Quantitative",
    question: "HOW MUCH",
    headline: "Nothing counted yet",
    lines: [
      "Round one was three students \u2014 too few for counts, rates or time on task.",
      "Round two adds 2\u20133 per service, which is when severity and frequency become measurable.",
      "Until then no percentage on this site would mean anything.",
    ],
    className: "pink",
    icon: "\u25A5",
    image: "",
    imageAlt: "",
  },
];

export function ResearchCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>(".research-card");
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Jumps rather than animates: `scroll-snap-type: mandatory` cancels a smooth
  // programmatic scroll mid-flight, so `behavior: "smooth"` moved nothing at
  // all here. Instant also matches the rest of the site, which does not slide.
  const goTo = (index: number) => {
    const el = scrollerRef.current;
    const card = el?.querySelectorAll<HTMLElement>(".research-card")[index];
    if (!el || !card) return;
    el.scrollLeft = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
  };

  return (
    <div className="research-carousel">
      <div
        className="research-scroller"
        ref={scrollerRef}
        aria-label="Analysis artefacts"
      >
        {slides.map((slide) => (
          <article className="research-card" key={slide.number}>
            <div className="research-card-copy">
              <span className="research-card-number">{slide.number}</span>
              <h3>{slide.title}</h3>
              <p className="research-card-question">{slide.question}</p>
              <p className="research-card-headline">{slide.headline}</p>
              <ul className="research-card-lines">
                {slide.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className={`research-card-media ${slide.className}`}>
              {slide.image ? (
                <img src={slide.image} alt={slide.imageAlt || slide.title} />
              ) : (
                <span aria-hidden="true">{slide.icon}</span>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.number}
            type="button"
            className={i === active ? "is-active" : undefined}
            aria-label={`Slide ${i + 1} of ${slides.length}: ${slide.title}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
