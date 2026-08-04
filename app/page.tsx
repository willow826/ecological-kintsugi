import { Poll } from "./Poll";

const archiveItems = [
  {
    src: "/archive-final/hero-application.jpg",
    title: "Urban Cellulite",
    meta: "Iteration 01 · Weathered surface",
    note: "The first public test followed a pavement crack as a small gesture of visible repair.",
  },
  {
    src: "/archive-final/iterations/moss-threshold.jpg",
    title: "Moss Threshold",
    meta: "Iteration 02 · Maintenance in transition",
    note: "The trace crossed a repaired pavement edge where moss, asphalt and municipal maintenance meet.",
  },
  {
    src: "/archive-final/iterations/living-edge-detail.jpg",
    title: "Living Edge",
    meta: "Iteration 03 · Following the crack",
    note: "The intervention worked with an existing plant at the edge rather than introducing new growth.",
  },
  {
    src: "/archive-final/iterations/making-public-space.jpg",
    title: "Working in public",
    meta: "Field action · Exposure and conversation",
    note: "Making the trace in public became part of the research, opening small moments of curiosity.",
  },
  {
    src: "/archive-final/material-refinement-texture.jpg",
    title: "Material refinement",
    meta: "Paper pulp · flour · turmeric · water",
    note: "Leaving some paper fibre intact made the mixture less clay-like and easier to read as a temporary trace.",
  },
  {
    src: "/archive-final/wall-edge-existing-ecology.jpg",
    title: "Existing conditions",
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

const materials = [
  {
    name: "Paper pulp",
    role: "Fibre body",
    detail:
      "Kitchen paper is soaked and partly broken down. Keeping visible fibres prevents the mixture from becoming a clay-like mass.",
  },
  {
    name: "Flour",
    role: "Binder",
    detail:
      "A small amount of flour helps the pulp hold together while remaining temporary and water-sensitive.",
  },
  {
    name: "Turmeric",
    role: "Visible pigment",
    detail:
      "Turmeric gives the trace its yellow presence, making the crack noticeable without using synthetic paint.",
  },
  {
    name: "Water",
    role: "Mixing medium",
    detail:
      "Water controls workability on site and allows the material to be applied lightly along the crack.",
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
      <section className="hero" aria-label="Ecological Kintsugi introduction">
        <div className="hero-media">
          <img
            src="/archive-final/hero-application.jpg"
            alt="A person applying a yellow temporary repair trace to a pavement crack"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Ecological Kintsugi</p>
          <h1>
            Repairing Attention.
            <span>Leaving the Crack.</span>
          </h1>
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

      <section className="section material" id="material">
        <div className="section-heading archive-heading">
          <div>
            <p className="eyebrow">Material recipe</p>
            <h2>Visible, temporary, removable</h2>
          </div>
          <p>
            The selected mixture combines paper pulp, flour, turmeric and
            water. It is not treated as environmentally perfect; its value lies
            in small-scale, careful and temporary application.
          </p>
        </div>
        <div className="material-layout">
          <figure className="material-image">
            <img
              src="/archive-final/material-refinement-texture.jpg"
              alt="Yellow paper pulp, flour and turmeric mixture with visible paper fibres"
              loading="lazy"
            />
            <figcaption>
              Material refinement: keeping some paper fibres visible improved
              texture and prevented the mixture from becoming too clay-like.
            </figcaption>
          </figure>
          <div className="material-list">
            {materials.map((item, index) => (
              <article className="material-item" key={item.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{item.role}</p>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
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

      <footer className="site-footer">
        <p>Ecological Kintsugi</p>
        <p>© Willow Yang 2026</p>
      </footer>
    </main>
  );
}
