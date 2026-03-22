import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.hero}>
        <h1 className={styles.title}>About <span className={styles.highlight}>H2O Study</span></h1>
        <p className={styles.subtitle}>Empowering Indian students with high-quality, accessible education.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2>Our Mission</h2>
          <p>We aim to democratize education by providing top-tier study materials, interactive video lectures, and rigorous test series at affordable or zero cost. Whether you are preparing for Board exams or aiming for JEE/NEET, H2O Study is your reliable academic partner.</p>
          
          <h2>Who We Are</h2>
          <p>Founded by passionate educators, H2O Study has grown from a humble YouTube channel to a comprehensive learning platform serving hundreds of thousands of students across the nation.</p>
        </div>
        <div className={styles.imageSection}>
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Students learning" className={styles.aboutImg} />
        </div>
      </div>
    </div>
  );
}
