"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const userNeeds = [
  {
    title: "Clear, trusted answers",
    quotes: [
      '"Too many messages in group chats, and I do not know which requirement is official."',
      '"I see course abbreviations and system names, but I do not know which one to do first."',
    ],
  },
  {
    title: "Confidence in daily campus tasks",
    quotes: [
      '"I cannot read building codes like LT and AS, so I do not know where the entrance is."',
      '"I do not know where to buy essentials near my residence."',
    ],
  },
  {
    title: "Low-pressure help from others",
    quotes: [
      '"Some questions are very basic, and I am afraid people will find them annoying."',
      '"I do not want to ask my roommate what to do every time."',
    ],
  },
  {
    title: "Buying and paying without surprises",
    quotes: [
      '"When buying used items, I do not know whether the seller is actually a student."',
      '"I am afraid I will pay the wrong person such as other customers."',
    ],
  },
];

const personaGoals = [
  "Navigate campus without getting lost",
  "Settle classes, fees, and applications",
  "Manage a tight monthly budget",
  "Meet peers and feel less isolated",
];

const journeyStages = [
  { stage: "Orientation", module: "Academic Hub", feeling: "Overwhelmed" },
  { stage: "Course setup", module: "Academic Hub", feeling: "Confused" },
  { stage: "Find class", module: "Commute", feeling: "Relieved" },
  { stage: "Pay budget", module: "Pay", feeling: "Cautious" },
  { stage: "Buy textbook", module: "Market", feeling: "Hopeful" },
  { stage: "Ask AI", module: "AI / Forum", feeling: "Confident" },
];

const journeyMap = [
  {
    stage: "Orientation",
    action: "Opens NovaGo after check-in",
    problem: "Scattered emails and unfamiliar acronyms",
  },
  {
    stage: "Course setup",
    action: "Checks planner, fees, and waitlist",
    problem: "Status and payments are separated",
  },
  {
    stage: "Find class",
    action: "Uses route guidance to lecture hall",
    problem: "Indoor route details are hard to find",
  },
  {
    stage: "Pay budget",
    action: "Pays deposit and sets monthly budget",
    problem: "Exchange fees create money anxiety",
  },
  {
    stage: "Buy textbook",
    action: "Reserves a used textbook nearby",
    problem: "Trust, pickup, refund, and deposit risks",
  },
  {
    stage: "Ask AI",
    action: "Asks why a form was rejected",
    problem: "AI could answer without sources",
  },
];

export function ResearchCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const panels = el.querySelectorAll<HTMLElement>(".research-panel");
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      panels.forEach((panel, i) => {
        const dist = Math.abs(panel.offsetLeft + panel.offsetWidth / 2 - mid);
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
  // programmatic scroll mid-flight, so `behavior: "smooth"` moves nothing here.
  const goTo = (index: number) => {
    const el = scrollerRef.current;
    const panel = el?.querySelectorAll<HTMLElement>(".research-panel")[index];
    if (!el || !panel) return;
    el.scrollLeft = panel.offsetLeft - (el.clientWidth - panel.offsetWidth) / 2;
  };

  return (
    <div className="research-carousel">
      <div
        className="research-evidence"
        ref={scrollerRef}
        aria-label="Research evidence"
      >
      <section className="research-panel research-data-panel">
        <div className="research-panel-head">
          <p className="subsection-label light">Affinity diagram</p>
          <h3>New students need trusted next steps, not more scattered links.</h3>
        </div>
        <div className="research-data-grid">
          {userNeeds.map((need) => (
            <article key={need.title}>
              <h4>{need.title}</h4>
              {need.quotes.map((quote) => (
                <blockquote key={quote}>{quote}</blockquote>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="research-panel persona-panel">
        <div className="persona-overview">
          <div className="persona-card">
            <div className="persona-avatar">
              <img src="/images/research/alex-chen.jpg" alt="Alex Chen" />
            </div>
            <div>
              <p className="subsection-label light">Persona</p>
              <h3>Alex Chen</h3>
              <p className="persona-role">
                Computer Science freshman - first week on campus
              </p>
              <p className="persona-goal-label">Primary goal</p>
              <p className="persona-primary-goal">
                Complete essential first-week tasks without guessing which
                source or step to trust.
              </p>
            </div>
          </div>
          <div className="persona-scenario">
            <h4>Scenario</h4>
            <p>
              Alex arrives for orientation week and needs to complete course
              setup, find his first class, pay campus fees, buy a used textbook,
              and ask for help when official instructions are unclear.
            </p>
          </div>
        </div>
        <div className="persona-detail-grid">
          <article>
            <h4>Constraints</h4>
            <p>Campus information sits across unfamiliar systems.</p>
            <p>Trust, payments, and routes are hard to verify at a glance.</p>
          </article>
          <article>
            <h4>Behaviours</h4>
            <p>Cross-checks official pages and group chats before acting.</p>
            <p>Looks for a clear next step when instructions conflict.</p>
          </article>
        </div>
        <div className="persona-goals">
          <h4>Key tasks</h4>
          <ul>
            {personaGoals.map((goal, index) => (
              <li key={goal}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="research-panel journey-panel">
        <div className="research-panel-head">
          <p className="subsection-label light">User journey</p>
          <h3>Alex&rsquo;s first week moves across five connected modules.</h3>
          <p>
            The journey starts with uncertainty and becomes more confident as
            NovaGo turns each task into a visible next step.
          </p>
        </div>
        <div className="journey-stage-grid">
          {journeyStages.map((item, index) => (
            <article key={item.stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item.stage}</h4>
              <small>{item.feeling}</small>
            </article>
          ))}
        </div>
        <p className="journey-focus">
          Journey focus: Academic Hub, Commute, Pay, Market, and AI / Forum turn
          first-week uncertainty into campus independence.
        </p>
      </section>

      <section className="research-panel journey-map-panel">
        <div className="research-panel-head">
          <p className="subsection-label light">Journey map</p>
          <h3>A successful journey reduces the moments when Alex has to guess.</h3>
          <p>
            The map shows what Alex does and where the pain appears across six
            stages of his first week.
          </p>
        </div>
        <div className="journey-map">
          <div className="journey-map-axis journey-map-stage-axis">
            <span>Stage</span>
            {journeyMap.map((item) => (
              <strong key={item.stage}>{item.stage}</strong>
            ))}
          </div>
          <div className="journey-map-axis">
            <span>Action</span>
            {journeyMap.map((item) => (
              <p key={item.stage}>{item.action}</p>
            ))}
          </div>
          <div className="journey-map-axis">
            <span>Problem</span>
            {journeyMap.map((item) => (
              <p key={item.stage}>{item.problem}</p>
            ))}
          </div>
          <div className="journey-map-axis journey-map-emotion-axis">
            <span>Emotion</span>
            <div className="emotion-journey">
              <Image
                src="/images/research/emotion-journey.png"
                alt="Alex's emotions rise and fall from overwhelmed and confused to relieved, cautious, hopeful, and confident."
                width={2081}
                height={350}
              />
            </div>
          </div>
        </div>
        <p className="journey-principle">
          Design principle: keep AI shortcuts accessible, sourced, and safe.
        </p>
      </section>
      </div>
      <div className="carousel-dots">
        {["Affinity diagram", "Persona", "User journey", "Journey map"].map(
          (label, i) => (
            <button
              key={label}
              type="button"
              className={i === active ? "is-active" : undefined}
              aria-label={`Slide ${i + 1} of 4: ${label}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
            />
          ),
        )}
      </div>
    </div>
  );
}
