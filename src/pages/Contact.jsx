function Contact() {
  const openMail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact depuis votre portfolio");
    const body = encodeURIComponent(
      "Bonjour Ala,\n\nJe vous contacte depuis votre portfolio.\n\nJe souhaiterais discuter de ...\n\nCordialement,\n[Votre nom]"
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=ala.abid.dev@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <main className="page">
      <section className="section contact-section">
        <div className="section-header">
          <p className="section-tag">07 — CONTACT</p>
          <h1>Contactez-moi</h1>
          
        </div>

        <div className="contact-cards">
          {/* Email */}
          <a onClick={openMail} className="contact-card" style={{ cursor: "pointer" }}>
            <div className="contact-card-icon">📧</div>
            <h3>Email</h3>
            <p className="contact-card-value">ala.abid.dev@gmail.com</p>
            <span className="contact-card-action">M'écrire →</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ala-abid-a506aa2a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">💼</div>
            <h3>LinkedIn</h3>
            <p className="contact-card-value">Ala Abid</p>
            <span className="contact-card-action">Me suivre →</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;