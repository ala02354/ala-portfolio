const projects = [
  {
    number: "01",
    title: "Supplier Management System",

    type: "Projet de fin d'études",

    description:
      "Application web complète dédiée à la gestion, l'évaluation et la sélection des fournisseurs. La solution intègre plusieurs modules de gestion ainsi que des dashboards permettant le suivi des performances et des indicateurs clés.",

    technologies:
      "React · JavaScript · PHP · MySQL",

    link:
      "https://drive.google.com/file/d/1gvjf4Fbqtug1Id5Kw4RjdLnuNVOwY1Ej/view?usp=sharing",
  },

  {
    number: "02",
    title: "Application Web pour Vêtements",

    type: "Mini-projet académique",

    description:
      "Application web de gestion de vêtements permettant l'ajout, la modification, la suppression et la recherche de produits, avec gestion des stocks et des catégories.",

    technologies:
      "HTML5·CSS3· JavaScript · MySQL",

    link:
      "https://drive.google.com/file/d/1zCEFwCzT-69Jf03VAooOPYSYCPwMreh5/view?usp=sharing",
  },

 {
  number: "03",
  title: "Sfax United — Affiches & Design",

  type: "Projet graphique / Club sportif",

  description:
    "Création d'affiches pour le club de football Sfax United. Conception de visuels percutants pour la promotion du club, des matchs et des événements.",

  technologies:
    "Adobe Photoshop · Design graphique",

  link:
    "https://drive.google.com/drive/folders/1je2owmeHPZpdOfA7yXp_-RL3oBjHM76D?usp=sharing",
},
];

function Projects() {
  return (
    <main className="page">

      <section className="section">

        {/* HEADER */}
        <div className="section-header">
          <p className="section-tag">
            03 — PROJETS
          </p>

          <h1>
            Mes réalisations
          </h1>
        </div>


        {/* PROJECTS */}
        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              {/* NUMBER */}
              <div className="project-number">
                {project.number}
              </div>


              {/* TYPE */}
              <p className="project-type">
                {project.type}
              </p>


              {/* TITLE */}
              <h2>
                {project.title}
              </h2>


              {/* DESCRIPTION */}
              <p className="project-description">
                {project.description}
              </p>


              {/* TECHNOLOGIES */}
              <div className="project-tech">
                {project.technologies}
              </div>


              {/* BUTTON */}
              {project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Voir le projet →
                </a>
              ) : (
                <button
                  className="project-btn"
                  type="button"
                  disabled
                >
                  Bientôt disponible →
                </button>
              )}

            </article>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Projects;