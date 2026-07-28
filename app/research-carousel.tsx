"use client";

import { useEffect, useRef, useState } from "react";

// User research artefacts for the portfolio homepage. The notes from the
// supplied content file are treated as draft evidence prompts: useful for
// showing the intended research direction, but still labelled as material to
// validate in the next round.
const slides = [
  {
    number: "01",
    title: "Research scope",
    question: "EVIDENCE STATUS",
    headline: "Round one found patterns; round two needs more students",
    lines: [
      "The first interviews gave a useful starting point, especially around abbreviations, scattered platforms and first-week uncertainty.",
      "The new notes extend each service with draft questions, not final proof: Payment, Academic Hub, Market, Forum and Commute all need individual follow-up interviews.",
      "We will use the next round to compare perspectives across services instead of relying on only three students.",
    ],
    className: "blue",
    icon: "◉",
    image: "",
    imageAlt: "",
  },
  {
    number: "02",
    title: "Service notes",
    question: "WHAT WE NEED TO LEARN",
    headline: "Each service now has a sharper research angle",
    lines: [
      "Payment: students need visible wallet balance, supported methods, exchange fees, payment status and recovery steps after failure.",
      "Academic Hub: students need course planning, deadline tracking and admin task guidance rather than a large folder of links.",
      "Market, Forum and Commute: trust signals, source labels, pickup details, route comparison and leave-by reminders are the details that make the flow usable.",
    ],
    className: "violet",
    icon: "◐",
    image: "",
    imageAlt: "",
  },
  {
    number: "03",
    title: "Second persona",
    question: "WHO",
    headline: "Maya Lim: exchange student, first semester at NUS",
    lines: [
      "Maya is 21, lives near campus, uses English daily, but is unfamiliar with local acronyms and campus systems.",
      "Quote: 'I do not want to ask basic questions every time, but I also do not know which answer to trust.'",
      "She checks group chats first because they are fast, then cross-checks official websites, friends and emails before acting.",
    ],
    className: "orange",
    icon: "◈",
    image: "",
    imageAlt: "",
  },
  {
    number: "04",
    title: "Journey map",
    question: "WHERE THE CONFLICT PEAKS",
    headline: "Maya's first-week journey peaks at payment and exchange",
    lines: [
      "Stages: arrival, orientation, course setup, commute, payment, currency exchange, forum help and budget update.",
      "The highest conflict happens when money, exchange rate, card reliability and consequence all arrive in one decision.",
      "The website should show this as a visual journey map with an emotion curve, highlighting Payment and Currency Exchange as the main stress point.",
    ],
    className: "mint",
    icon: "◇",
    image: "",
    imageAlt: "",
  },
  {
    number: "05",
    title: "Core tasks",
    question: "FOCUSING THE ECOSYSTEM",
    headline: "Each service is reduced to two or three useful tasks",
    lines: [
      "Payment: wallet and top up, currency exchange, QR payment with Budget Planner update.",
      "Academic Hub: course planner, leave application, assignment and deadline tracking.",
      "Market, Forum and Commute: safe buy/rent flows, source-aware help, route comparison and leave-by alerts.",
    ],
    className: "pink",
    icon: "▦",
    image: "",
    imageAlt: "",
  },
  {
    number: "06",
    title: "Evaluation plan",
    question: "HOW WE WILL TEST IT",
    headline: "Test confidence, trust and continuity, not only screen polish",
    lines: [
      "Heuristic evaluation will check visibility of system status, consistency, error recovery, user control and information hierarchy.",
      "Usability testing with five students will cover finding a class, buying or renting a textbook, paying, exchanging currency and identifying answer sources in Forum.",
      "Metrics: task completion, wrong turns, time to complete, confidence rating, trust rating and clarity of the next action.",
    ],
    className: "blue",
    icon: "▣",
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
        aria-label="User research artefacts"
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
