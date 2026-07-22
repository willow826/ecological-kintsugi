const surveyUrl = "https://tally.so/r/BzlJ7Q";

const archiveItems = [
  {
    src: "/archive/site01-baseline-crack.jpg",
    title: "Before the trace",
    meta: "Site 01 · Tree-side asphalt crack · 19 Jul 2026",
    note: "The crack was already present as a small edge condition beside the tree.",
  },
  {
    src: "/archive/turmeric-pulp-bowl.jpg",
    title: "Material preparation",
    meta: "Turmeric paper pulp · temporary mixture",
    note: "A visible, removable material was prepared as a short-lived repair gesture.",
  },
  {
    src: "/archive/turmeric-pulp-application.jpg",
    title: "Applying the repair trace",
    meta: "On-site making · low impact intervention",
    note: "The material follows the crack rather than covering the surrounding ecology.",
  },
  {
    src: "/archive/site01-after-detail.jpg",
    title: "Repair as attention",
    meta: "Immediately after application",
    note: "The yellow trace redirects attention towards the existing crack and nearby plant life.",
  },
  {
    src: "/archive/qr-card-grass-test.jpg",
    title: "QR card test",
    meta: "Public prompt · removable label",
    note: "A small prompt invites passers-by to respond without turning the site into a poster.",
  },
  {
    src: "/archive/two-hour-return-material.jpg",
    title: "Two-hour return",
    meta: "Same day follow-up",
    note: "The trace remained visible while the public-facing card was removed from the site.",
  },
  {
    src: "/archive/day2-material-state.jpg",
    title: "Day 2 material state",
    meta: "Weathering and disappearance",
    note: "Change, fading and removal are treated as part of the project evidence.",
  },
  {
    src: "/archive/wall-edge-existing-ecology.jpg",
    title: "Existing marginal ecology",
    meta: "Wall edge · spontaneous vegetation",
    note: "The project looks for ecology already present in overlooked urban edges.",
  },
  {
    src: "/archive/trace-pavement-overview.jpg",
    title: "Trace in passing view",
    meta: "Pavement scale · everyday attention",
    note: "The intervention is small enough to belong to the ground, but bright enough to interrupt habitual walking.",
  },
];

const principles = [
  "Reveal existing ecologies rather than introduce new life.",
  "Use temporary, removable materials that can weather or disappear.",
  "Treat public attention as evidence, not as decoration.",
  "Keep the intervention small enough to avoid overpowering the crack.",
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="Ecological Kintsugi introduction">
        <div className="hero-media">
          <img
            src="/archive/site01-after-detail.jpg"
            alt="A yellow temporary repair trace following a pavement crack"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Ecological Kintsugi</p>
          <h1>This crack was already here.</h1>
          <p className="lead">
            A temporary repair trace asks whether a small material gesture can
            make overlooked cracks, mosses and spontaneous plants more visible.
          </p>
          <div className="actions">
            <a className="primary-action" href={surveyUrl}>
              Answer the 30-second survey
            </a>
            <a className="secondary-action" href="#archive">
              View the archive
            </a>
          </div>
        </div>
      </section>

      <section className="statement">
        <p>
          The yellow trace does not repair the crack permanently. It temporarily
          repairs attention.
        </p>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="eyebrow">About this project</p>
          <h2>Repair as a way of noticing</h2>
        </div>
        <div className="about-grid">
          <article>
            <h3>What is Ecological Kintsugi?</h3>
            <p>
              Ecological Kintsugi is an MA Design for Change research project
              at Edinburgh College of Art. It uses temporary repair traces,
              small QR labels and field observation to make marginal urban
              ecologies perceptible.
            </p>
          </article>
          <article>
            <h3>Why not planting?</h3>
            <p>
              The project began with seed and paper-pulp experiments. Practice
              showed that plant growth depends on moisture, temperature and
              care. The research therefore shifted from producing new ecology to
              revealing conditions already present.
            </p>
          </article>
          <article>
            <h3>Research through Design</h3>
            <p>
              Each trace is a small design experiment. Material behaviour,
              public attention, weathering and removal are documented as part of
              the research, not treated as background information.
            </p>
          </article>
        </div>
      </section>

      <section className="section method">
        <div className="section-heading">
          <p className="eyebrow">Temporary repair trace</p>
          <h2>A field method, not a permanent fix</h2>
        </div>
        <div className="method-grid">
          {principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section archive" id="archive">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">Growing archive</p>
            <h2>Crack, moss, trace, return</h2>
          </div>
          <p>
            A working archive of field images. The sequence moves from existing
            site conditions to material making, public prompt and follow-up
            observation.
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
        <p>The crack was always here. Perhaps your attention wasn&apos;t.</p>
        <a href={surveyUrl}>Respond to the survey</a>
      </section>
    </main>
  );
}
