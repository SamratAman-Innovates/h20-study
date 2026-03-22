import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <span className={styles.highlight}>H2O</span> Study
          </Link>
          <p className={styles.description}>
            Your ultimate student-friendly learning platform for free and premium educational content. Build your knowledge, prepare for exams, and achieve your goals.
          </p>
        </div>
        
        <div className={styles.linksSection}>
          <h3>Quick Links</h3>
          <Link href="/courses">Courses</Link>
          <Link href="/notes">Study Materials</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.socialSection}>
          <h3>Connect with Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.youtube.com/@H2Ostudy" target="_blank" rel="noopener noreferrer">▶ YouTube</a>
            <a href="https://instagram.com/h2o_study" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
            <a href="https://t.me/H2O_STUDY_OFFICIAL" target="_blank" rel="noopener noreferrer">✈️ Telegram</a>
            <a href="https://facebook.com/H2OstudyOFFICIAL" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
          </div>
          <a href="https://storage.googleapis.com/cp-prod-projb-pub/white_label_1.4.77/31Aug23/" className={styles.appDownloadBtn} target="_blank" rel="noopener noreferrer">
            📱 Download Mobile App
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} H2O Study. All rights reserved.</p>
      </div>
    </footer>
  );
}
