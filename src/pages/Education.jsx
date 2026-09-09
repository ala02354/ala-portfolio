const education = [
  {
    date: "2026 — Présent",
    title: "Cycle d'Ingénieur en Génie Informatique ",
    school: "Institut International de Technologie — IIT Sfax",
  },
  {
    date: "2023 — 2026",
    title: "Licence — Informatique de Gestion",
    school: "École Supérieure de Commerce de Sfax",
  },
  {
    date: "2022 — 2023",
    title: "Baccalauréat — Économie & Gestion",
    school: "Lycée Mohamed Ali — Sfax",
  },
];

function Education() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <p className="section-tag">05 — FORMATION</p>
          <h1>Mon parcours académique</h1>
        </div>
        <div className="education-list">
          {education.map((item) => (
            <div className="education-item" key={item.date}>
              <span className="education-date">{item.date}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Education;