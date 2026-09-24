function About() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "PHP",
    "Java",
    "C#",
    "C++",
    "Python",
    "SQL",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "UML",
    "Scrum",
    "Adobe Photoshop",
  ];

  const focusAreas = [
    {
      icon: "🧠",
      title: "Génie Logiciel",
      description:
        "Analyse, architecture, développement et tests de solutions logicielles.",
    },
    {
      icon: "🌐",
      title: "Développement Web & Mobile",
      description:
        "Interfaces modernes et responsives, applications full-stack.",
    },
    {
      icon: "🤖",
      title: "IA & Automatisation",
      description:
        "Exploration d'applications intelligentes et de solutions basées sur l'IA.",
    },
    {
      icon: "📚",
      title: "Apprentissage Continu",
      description:
        "Toujours en train d'améliorer mes compétences techniques et d'ingénierie.",
    },
  ];

  const quickFacts = [
    { icon: "🎓", label: "Génie Informatique" },
    { icon: "📍", label: "Sfax, Tunisie" },
    { icon: "💻", label: "Développement Web & Logiciel" },
    { icon: "🤖", label: "Passionné d'IA" },
    { icon: "🌐", label: "Français / Anglais / Arabe" },
  ];

  return (
    <main className="page">
      <section className="section">

        <div className="section-header">
          <p className="section-tag">01 — ABOUT ME</p>
          <h1>Qui suis-je ?</h1>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <h2>
              Je transforme les idées en{" "}
              <span>solutions digitales</span>.
            </h2>

            <p>
              Jeune diplômé en Informatique de Gestion et actuellement
              étudiant en cycle d'ingénieur en Génie Informatique à l'IIT Sfax.
            </p>

            <p>
              Passionné par le développement web et mobile, je conçois des
              applications modernes en mettant l'accent sur la qualité du
              code, la performance et l'expérience utilisateur.
            </p>

            <p>
              Je m'intéresse également au montage vidéo et au design graphique,
              ce qui me permet de développer une approche à la fois technique
              et créative.
            </p>

            <p>
              Mon objectif est de créer des solutions digitales modernes,
              robustes et adaptées aux besoins réels des entreprises.
            </p>
          </div>

          <div className="about-cards">

            <div className="info-card">
              <span>🎓</span>
              <h3>Formation</h3>
              <p>
                Cycle Ingénieur<br />
                Génie Informatique
              </p>
            </div>

            <div className="info-card">
              <span>💻</span>
              <h3>Développement</h3>
              <p>
                Applications Web<br />
                & Mobile
              </p>
            </div>

            <div className="info-card">
              <span>🎬</span>
              <h3>Créatif</h3>
              <p>
                Montage vidéo<br />
                Design graphique
              </p>
            </div>

            <div className="info-card">
              <span>⚡</span>
              <h3>Approche</h3>
              <p>
                Performance<br />
                UX & Qualité
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="section">
        <div className="section-header">
          <p className="section-tag">02 — MY FOCUS</p>
          <h1>Mes domaines de focus</h1>
        </div>

        <div className="about-cards">
          {focusAreas.map((area) => (
            <div className="info-card" key={area.title}>
              <span>{area.icon}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* CREATIVE */}
      <section className="section">
        <div className="section-header">
          <p className="section-tag">03 — BEYOND CODE</p>
          <h1>Au-delà du développement</h1>
        </div>

        <div className="about-cards">

          <div className="info-card">
            <span>🎬</span>
            <h3>Montage vidéo</h3>
            <p>
              Création et montage de contenus vidéo,
              transitions et storytelling visuel.
            </p>
          </div>

          <div className="info-card">
            <span>🎨</span>
            <h3>Design graphique</h3>
            <p>
              Création d'affiches, visuels et supports
              graphiques avec Adobe Photoshop.
            </p>
          </div>

          <div className="info-card">
            <span>🧩</span>
            <h3>Conception</h3>
            <p>
              Analyse des besoins, modélisation UML
              et conception de solutions logicielles.
            </p>
          </div>

          <div className="info-card">
            <span>🚀</span>
            <h3>Innovation</h3>
            <p>
              Curieux et toujours à la recherche de
              nouvelles technologies et solutions.
            </p>
          </div>

        </div>

      </section>
      
      {/* QUICK FACTS */}
      <section className="section">
        <div className="section-header">
          <p className="section-tag">04 — QUICK FACTS</p>
          <h1>En quelques mots</h1>
        </div>

        <ul className="quick-facts">
          {quickFacts.map((fact) => (
            <li key={fact.label}>
              <span className="fact-icon">{fact.icon}</span>
              <span className="fact-label">{fact.label}</span>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}

export default About;