function Experience() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-header">
          <p className="section-tag">04 — EXPÉRIENCE</p>
          <h1>Parcours professionnel</h1>
          <p className="section-subtitle">
            Mon parcours m'a permis d'acquérir des compétences solides en 
            développement web, en conception de systèmes d'information 
            et en gestion de projets.
          </p>
        </div>

        <div className="timeline">

          {/* ===== STAGE PFE ===== */}
          <div className="timeline-item">
            <div className="timeline-date">
              <span className="date-year">2026</span>
              <span className="date-period">Fév – Mai</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-badge">Stage de fin d'études</span>
              <h2>Développement Web — Application Fournisseurs</h2>
              <h3>TMS Group Hammami</h3>
              <p>
                Conception et développement d'une application web complète 
                pour la gestion, l'évaluation et la sélection des fournisseurs, 
                intégrant des dashboards de suivi des performances.
              </p>
              <ul>
                <li>Analyse des besoins fonctionnels et modélisation UML</li>
                <li>Développement frontend avec React</li>
                <li>Backend PHP et base de données MySQL</li>
                <li>Création de tableaux de bord et indicateurs clés</li>
                <li>Tests, validation et déploiement de la solution</li>
              </ul>
            </div>
          </div>

         

          {/* ===== PROJET SFAX UNITED ===== */}
          <div className="timeline-item">
            <div className="timeline-date">
              <span className="date-year">2025-Présent</span>
            
            </div>
            <div className="timeline-content">
              <span className="timeline-badge creative">Design graphique</span>
              <h2>Sfax United — Création d'affiches</h2>
              <h3>Club sportif</h3>
              <p>
                Conception d'affiches percutantes pour la promotion du club 
                de football Sfax United, de ses matchs et de ses événements.
              </p>
              <ul>
                <li>Création de visuels marketing attractifs</li>
                <li>Utilisation d'Adobe Photoshop</li>
                <li>Respect de la charte graphique du club</li>
                <li>Adaptation des designs pour différents supports</li>
              </ul>
            </div>
          </div>

          {/* ===== BÉNÉVOLAT ===== */}
          <div className="timeline-item">
            <div className="timeline-date">
              <span className="date-year">2025</span>

              
              <span className="date-period">Mars – Avr</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-badge volunteer">Bénévolat</span>
              <h2>Campagne des Paniers Alimentaires de Ramadan</h2>
              <h3>Organisation caritative</h3>
              <p>
                Participation active à la collecte et à la distribution de 
                paniers alimentaires pour les familles dans le besoin.
              </p>
              <ul>
                <li>Organisation logistique des opérations</li>
                <li>Collaboration avec les bénévoles et partenaires locaux</li>
                <li>Développement des compétences en communication</li>
                <li>Travail d'équipe et sens des responsabilités</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Experience;