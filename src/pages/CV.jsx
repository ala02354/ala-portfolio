function CV() {
  return (
    <main className="page">
      <section className="section cv-section">
        <div className="section-header">
          <p className="section-tag">06 — CV</p>
          <h1>Mon curriculum vitae</h1>
        </div>
        <div className="cv-box">
          <div>
            <span className="cv-icon">📄</span>
            <h2>Découvrez mon parcours</h2>
            <p>Téléchargez mon CV pour consulter en détail mes formations, compétences, expériences et projets.</p>
          </div>
           <a href="/cv.pdf" download className="btn primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger mon CV
            </a>
        </div>
      </section>
    </main>
  );
}

export default CV;