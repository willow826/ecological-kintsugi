const archiveItems = [
  {
    src: "/archive-final/hero-application.jpg",
    title: "Applying the trace",
    meta: "Site 01 · Tree-side asphalt crack · 19 Jul 2026",
    note: "The repair trace was applied by hand as a temporary material gesture.",
  },
  {
    src: "/archive-final/site01-baseline-crack.jpg",
    title: "Site condition",
    meta: "Site 01 · Tree-side asphalt crack · 19 Jul 2026",
    note: "The crack was already present as a small edge condition beside the tree.",
  },
  {
    src: "/archive-final/turmeric-pulp-bowl.jpg",
    title: "Material preparation",
    meta: "Turmeric paper pulp · temporary mixture",
    note: "A visible, removable material was prepared as a short-lived repair gesture.",
  },
  {
    src: "/archive-final/turmeric-pulp-application.jpg",
    title: "Low-impact making",
    meta: "On-site making · low impact intervention",
    note: "The material follows the crack rather than covering the surrounding ecology.",
  },
  {
    src: "/archive-final/site01-after-detail.jpg",
    title: "Repair as attention",
    meta: "Immediately after application",
    note: "The yellow trace redirects attention towards the existing crack and nearby plant life.",
  },
  {
    src: "/archive-final/qr-card-grass-test.jpg",
    title: "Small public prompt",
    meta: "Public prompt · removable label",
    note: "A small prompt invites passers-by to respond without turning the site into a poster.",
  },
  {
    src: "/archive-final/two-hour-return-material.jpg",
    title: "Two-hour return",
    meta: "Same day follow-up",
    note: "The trace remained visible while the public-facing card was removed from the site.",
  },
  {
    src: "/archive-final/day2-material-state.jpg",
    title: "Day 2 material state",
    meta: "Weathering and disappearance",
    note: "Change, fading and removal are treated as part of the project evidence.",
  },
  {
    src: "/archive-final/wall-edge-existing-ecology.jpg",
    title: "Existing marginal ecology",
    meta: "Wall edge · spontaneous vegetation",
    note: "The project looks for ecology already present in overlooked urban edges.",
  },
  {
    src: "/archive-final/trace-pavement-overview.jpg",
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
            src="/archive-final/hero-application.jpg"
            alt="A person applying a yellow temporary repair trace to a pavement crack"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Ecological Kintsugi</p>
          <h1>Repairing attention, not the crack.</h1>
          <p className="lead">
            A Research through Design project using temporary yellow repair
            traces to make overlooked urban cracks and marginal ecologies more
            visible.
          </p>
          <div className="actions">
            <a className="primary-action" href="#about">
              About the project
            </a>
            <a className="secondary-action" href="#poll">
              Try the one-question poll
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

      <section className="section poll" id="poll">
        <div className="poll-panel">
          <div>
            <p className="eyebrow">One-question poll</p>
            <h2>What did you notice first?</h2>
            <p>
              This lightweight poll is part of the online version of the
              project. It does not store personal data; it simply mirrors the
              question asked by the field intervention.
            </p>
          </div>
          <Poll />
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
        <a href="#archive">Continue through the archive</a>
      </section>
    </main>
  );
}
import { Poll } from "./Poll";
