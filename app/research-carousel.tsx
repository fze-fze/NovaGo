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
    response: "First-week dashboard with today's tasks",
  },
  {
    stage: "Course setup",
    action: "Checks planner, fees, and waitlist",
    problem: "Status and payments are separated",
    response: "Academic timeline with official sync",
  },
  {
    stage: "Find class",
    action: "Uses route guidance to lecture hall",
    problem: "Indoor route details are hard to find",
    response: "Route comparison and leave-by alerts",
  },
  {
    stage: "Pay budget",
    action: "Pays deposit and sets monthly budget",
    problem: "Exchange fees create money anxiety",
    response: "Wallet and Budget Planner update together",
  },
  {
    stage: "Buy textbook",
    action: "Reserves a used textbook nearby",
    problem: "Trust, pickup, refund, and deposit risks",
    response: "Verified campus pickup and protected checkout",
  },
  {
    stage: "Ask AI",
    action: "Asks why a form was rejected",
    problem: "AI could answer without sources",
    response: "Source-backed answer or human escalation",
  },
];

export function ResearchCarousel() {
  return (
    <div className="research-evidence">
      <section className="research-panel research-data-panel">
        <div className="research-panel-head">
          <p className="subsection-label light">User data</p>
          <h3>New students need trusted next steps, not more scattered links.</h3>
          <p>
            The PPT research synthesis groups interview notes into four needs:
            trusted answers, confidence in campus tasks, low-pressure help, and
            safer buying or payment moments.
          </p>
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
        <div className="persona-card">
          <div className="persona-avatar" aria-hidden="true">
            AC
          </div>
          <div>
            <p className="subsection-label light">Persona</p>
            <h3>Alex Chen</h3>
            <p className="persona-role">
              Computer Science freshman - first week on campus
            </p>
            <blockquote>
              "I just want one app that tells me everything I need to know."
            </blockquote>
          </div>
        </div>
        <div className="persona-detail">
          <div>
            <h4>Scenario</h4>
            <p>
              Alex arrives for orientation week and needs to complete course
              setup, find his first class, pay campus fees, buy a used textbook,
              and ask for help when official instructions are unclear.
            </p>
          </div>
          <div>
            <h4>Goals</h4>
            <ul>
              {personaGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="research-panel journey-panel">
        <div className="research-panel-head">
          <p className="subsection-label light">User journey</p>
          <h3>Alex's first week moves across five connected modules.</h3>
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
              <p>{item.module}</p>
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
            The map shows what Alex does, where the pain appears, and how NovaGo
            responds at each stage.
          </p>
        </div>
        <div className="journey-map">
          <div className="journey-map-header">
            <span>Stage</span>
            <span>Action</span>
            <span>Problem</span>
            <span>NovaGo response</span>
          </div>
          {journeyMap.map((row, index) => (
            <div className="journey-map-row" key={row.stage}>
              <span>{String(index + 1).padStart(2, "0")} {row.stage}</span>
              <p>{row.action}</p>
              <p>{row.problem}</p>
              <p>{row.response}</p>
            </div>
          ))}
        </div>
        <p className="journey-principle">
          Design principle: every AI shortcut must also be reachable through
          normal menus, and every AI answer needs a visible source or safe
          fallback.
        </p>
      </section>
    </div>
  );
}
