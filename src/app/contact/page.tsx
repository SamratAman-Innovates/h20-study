import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>We'd love to hear from you. Reach out with any questions or feedback.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.infoCard}>
            <h3>📧 Email</h3>
            <p>support@h2ostudy.com</p>
          </div>
          <div className={styles.infoCard}>
            <h3>📱 Phone</h3>
            <p>+91 (800) 123-4567</p>
          </div>
          <div className={styles.infoCard}>
            <h3>🌍 Follow Us</h3>
            <p>On YouTube, Telegram, and Instagram @H2O_Study</p>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className={styles.formGroup}>
            <label>Email ID</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea rows={5} placeholder="How can we help?" required></textarea>
          </div>
          <button type="button" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
