import { Poll } from "./Poll";

const archiveItems = [
  {
    src: "/archive-final/hero-application.jpg",
    title: "Applying the trace",
    meta: "Iteration 01 · Tree-side asphalt crack",
    note: "A temporary yellow repair trace was applied by hand to test whether a small material gesture could redirect attention.",
  },
  {
    src: "/archive-final/site01-baseline-crack.jpg",
    title: "Before intervention",
    meta: "Existing condition · 19 Jul 2026",
    note: "The crack, tree edge and small ecological conditions were already present before the intervention began.",
  },
  {
    src: "/archive-final/site01-after-detail.jpg",
    title: "Repair as attention",
    meta: "Immediately after application",
    note: "The trace follows the crack rather than covering it, making damage and marginal ecology briefly perceptible.",
  },
  {
    src: "/archive-final/two-hour-return-material.jpg",
    title: "Return visit",
    meta: "Same-day follow-up",
    note: "Return visits document how weather, public space and material behaviour reshape the intervention.",
  },
  {
    src: "/archive-final/day2-material-state.jpg",
    title: "Weathering",
    meta: "Day 2 material state",
    note: "Fading, residue and disappearance are treated as research evidence rather than failure.",
  },
  {
    src: "/archive-final/wall-edge-existing-ecology.jpg",
    title: "Existing ecology",
    meta: "Wall edge · spontaneous vegetation",
    note: "The project works with plants, moss and moisture already occupying overlooked urban edges.",
  },
];

const iterations = [
  {
    number: "01",
    title: "Urban Cellulite",
    subtitle: "Weathered Surface",
    body: "The first intervention tested whether a visible repair trace could sit within everyday pavement without becoming a permanent fix.",
  },
  {
    number: "02",
    title: "Moss Threshold",
    subtitle: "Maintenance in Transition",
    body: "The second iteration shifted towards cracks where moss, repair and municipal maintenance meet, treating the site as unstable rather than fixed.",
  },
  {
    number: "03",
    title: "Living Edge",
    subtitle: "Following the Crack",
    body: "The third iteration followed an existing crack-plant relationship, using the trace to reveal ecology already present at the edge.",
  },
];

const principles = [
  {
    title: "Existing conditions",
    text: "Cracks, moisture, moss and spontaneous plants are treated as active urban conditions, not empty spaces.",
  },
  {
    title: "Temporary trace",
    text: "The material is visible, low-impact and removable. It marks the crack without claiming to repair it permanently.",
  },
  {
    title: "Public attention",
    text: "The intervention interrupts habitual movement and asks what becomes noticeable when a crack is marked.",
  },
  {
    title: "Documentation",
    text: "Photos, return visits, conversations and QR responses form a growing archive of field evidence.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="top-nav" aria-label="Project sections">
        <a href="#about">About</a>
        <a href="#iterations">Iterations</a>
        <a href="#poll">Question</a>
        <a href="#archive">Archive</a>
      </nav>

      <section className="hero" aria-label="Ecological Kintsugi introduction">
        <div className="hero-media">
          <img
            src="/archive-final/hero-application.jpg"
            alt="A person applying a yellow temporary repair trace to a pavement crack"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Ecological Kintsugi</p>
          <h1>Look again at the crack.</h1>
          <p className="lead">
            A temporary repair trace project making overlooked urban cracks,
            moss and spontaneous plant life briefly visible in everyday
            movement.
          </p>
          <div className="actions">
            <a className="primary-action" href="#poll">
              Answer one question
            </a>
            <a className="secondary-action" href="#archive">
              View the archive
            </a>
          </div>
        </div>
      </section>

      <section className="statement">
        <p>
          The intervention does not change the city. It changes how the city is
          seen.
        </p>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="eyebrow">About this project</p>
          <h2>Repair as a public prompt</h2>
        </div>
        <div className="about-layout">
          <p className="about-intro">
            Ecological Kintsugi is an MA Design for Change research project at
            Edinburgh College of Art. It uses small yellow repair traces, QR
            labels and field documentation to ask how design can redirect
            attention towards urban ecologies that are already present.
          </p>
          <div className="about-grid">
            <article>
              <h3>Research through Design</h3>
              <p>
                Each site intervention is a design experiment. Making,
                observing, returning and reflecting are used to generate
                research knowledge through practice.
              </p>
            </article>
            <article>
              <h3>Why not planting?</h3>
              <p>
                Early seed tests showed that growth depends on moisture,
                temperature and maintenance. The project therefore shifted from
                producing new life to revealing ecology that already exists.
              </p>
            </article>
            <article>
              <h3>Temporary repair trace</h3>
              <p>
                The material does not seal the crack. It briefly makes the
                crack, nearby plants and existing urban conditions easier to
                notice.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section method" aria-label="Project method">
        <div className="section-heading">
          <p className="eyebrow">Project logic</p>
          <h2>Existing conditions, temporary traces, shifting attention</h2>
        </div>
        <div className="method-grid">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section iterations" id="iterations">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">Field iterations</p>
            <h2>One method, changing sites</h2>
          </div>
          <p>
            The project develops through repeated public interventions rather
            than a single final object. Each site changes what the trace can
            reveal.
          </p>
        </div>
        <div className="iteration-grid">
          {iterations.map((item) => (
            <article className="iteration-card" key={item.title}>
              <span>{item.number}</span>
              <p>{item.subtitle}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section poll" id="poll">
        <div className="poll-panel">
          <div>
            <p className="eyebrow">A small public question</p>
            <h2>What did the yellow trace make you look at?</h2>
            <p>
              This one-question interaction mirrors the field prompt. It does
              not collect personal details. It simply records where attention
              moves.
            </p>
          </div>
          <Poll />
        </div>
      </section>

      <section className="section archive" id="archive">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">Growing archive</p>
            <h2>Crack, moss, trace, return</h2>
          </div>
          <p>
            This archive extends the intervention beyond the pavement. It
            records site conditions, material behaviour and public prompts as
            the research continues.
          </p>
        </div>
        <div className="archive-grid">
          {archiveItems.map((item) => (
            <article className="archive-card" key={item.src}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <div>
                <p className="archive-meta">{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <p>
          Perhaps the value of repair lies not in fixing the crack, but in
          changing what the crack allows us to notice.
        </p>
        <a href="#about">Read the project again</a>
      </section>
    </main>
  );
}
