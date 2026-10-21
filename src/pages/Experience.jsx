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

          {/* ===== CURA — E-COMMERCE ===== */}
          <div className="timeline-item">
            <div className="timeline-date">
              <span className="date-year">2026</span>
              <span className="date-period">Oct – Aujourd'hui</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-badge">Temps plein</span>
              <h2>Développeur Full-Stack & Designer Graphique</h2>
              <h3>Cura | E-commerce Company · Sur site</h3>
              <p>
                Développement de solutions logicielles internes et création 
                de supports visuels pour une entreprise e-commerce, tout en 
                poursuivant un diplôme d'ingénieur en informatique à l'IIT Sfax 
                en cours du soir.
              </p>
              <ul>
                <li>Développement et maintenance de solutions logicielles internes</li>
                <li>Conception d'affiches promotionnelles et de visuels marketing</li>
                <li>Montage vidéo pour les réseaux sociaux et le marketing digital</li>
                <li>Amélioration des outils internes et des workflows numériques</li>
                <li>Contribution à des projets techniques et créatifs liés à l'e-commerce</li>
              </ul>
              <p className="timeline-skills">
                <strong>Compétences :</strong> React · Angular · Next.js · 
                Design graphique · Montage vidéo · Marketing digital · 
                Développement web · E-commerce
              </p>
            </div>
          </div>

          {/* ===== STAGE PFE ===== */}
          <div className="timeline-item">
            <div className="timeline-date">
              
              <span className="date-period">Fév – Mai</span>
                <span className="date-year">2026</span>
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
              <p className="timeline-skills">
                <strong>Compétences :</strong> React · PHP · MySQL · UML · 
                Analyse des besoins · Tableaux de bord · Tests & déploiement
              </p>
            </div>
          </div>

          {/* ===== PROJET SFAX UNITED ===== */}
          <div className="timeline-item">
            <div className="timeline-date">
              <span className="date-year">2025-2026</span>
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
              <p className="timeline-skills">
                <strong>Compétences :</strong> Adobe Photoshop · Design graphique · 
                Création de visuels · Marketing · Respect de charte graphique · 
                Adaptation multi-supports
              </p>
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
              <p className="timeline-skills">
                <strong>Compétences :</strong> Organisation logistique · 
                Communication · Travail d'équipe · Sens des responsabilités · 
                Collaboration partenaires
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Experience;