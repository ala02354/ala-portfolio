const skillGroups = [
  {
    title: "Frontend",
    skills: [
      ["React", 90],
      ["JavaScript", 85],
      ["Angular", 75],
      ["HTML5", 95],
      ["CSS3", 90],
    ],
  },
  {
    title: "Backend",
    skills: [
      ["PHP", 85],
      ["Java", 75],
      ["C#", 70],
      ["Python", 70],
    ],
  },
  {
    title: "Base de données",
    skills: [
      ["MySQL", 90],
      ["MongoDB", 70],
      ["SQL", 90],
    ],
  },
  {
    title: "Outils & Méthodes",
    skills: [
      ["Git / GitHub", 85],
      ["UML", 85],
      ["Scrum", 75],
      ["XAMPP", 90],
    ],
  },
];

function Skills() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <p className="section-tag">02 — COMPÉTENCES</p>
          <h1>Technologies & savoir-faire</h1>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h2>{group.title}</h2>
              {group.skills.map(([name, level]) => (
                <div className="skill" key={name}>
                  <div className="skill-info">
                    <span>{name}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;