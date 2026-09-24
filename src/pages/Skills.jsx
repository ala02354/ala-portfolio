const skillGroups = [
  {
    title: "Programming",
    skills: ["JavaScript", "Java", "Python", "C", "C++", "C#", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Angular", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Java", "C#", "REST API"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL", "MongoDB"],
  },
  {
    title: "Information Systems",
    skills: ["Systèmes d'Information", "Analyse des besoins", "UML", "Modélisation"],
  },
  {
    title: "Web",
    skills: ["Web Development", "Responsive Design", "UI/UX", "E-Commerce", "E-Business"],
  },
  {
    title: "Data",
    skills: ["Data Analysis", "Data Mining", "Big Data"],
  },
  {
    title: "AI",
    skills: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    title: "Software Engineering",
    skills: ["Software Design", "Software Testing", "Agile", "Scrum"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "XAMPP"],
  },
  {
    title: "IT",
    skills: ["Computer Networks", "Operating Systems", "IT Security", "Cloud Computing"],
  },
];

function Skills() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <p className="section-tag">02 — COMPÉTENCES</p>
          <h1>Technologies & Expertise</h1>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h2>{group.title}</h2>

              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li className="skill-item" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;