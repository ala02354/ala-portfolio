function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small"> HELLO, I'M</p>
          <h1>Ala <span>Abid</span></h1>
          
<h2>Ingénieur en Génie Informatique</h2>

<p className="hero-description">
  Jeune diplômé en Informatique de Gestion et actuellement étudiant en cycle
  d’ingénieur en Génie Informatique. Passionné par le développement web,
  mobile et la conception de systèmes d’information modernes, je transforme
  les besoins métier en solutions digitales performantes et évolutives.
</p>


          <div className="hero-buttons">
            <a href="/projects" className="btn primary">Voir mes projets →</a>
            <a href="/contact" className="btn secondary">Me contacter</a>
          </div>
          <div className="socials">
           
            <a 
              href="https://www.linkedin.com/in/ala-abid-a506aa2a0/" 
              target="_blank" 
              rel="noreferrer" 
              className="social-link"
            >
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-code">
          <div className="code-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre>{`const developer = {
  name: "Ala Abid",
  role: "Ingénieur en Génie Informatique",
  skills: ["React", "JavaScript", "PHP", "MySQL"],
  passion: "Building great apps"
};`}</pre>
        </div>
      </section>
    </main>
  );
}

export default Home;