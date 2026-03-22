import styles from "./dashboard.module.css";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <div className={styles.avatar}>JD</div>
          <div>
            <h3 className={styles.name}>John Doe</h3>
            <p className={styles.email}>Class 12 • Science</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.activeLink}>My Courses</a>
          <a href="#">Test Performance</a>
          <a href="#">Downloads</a>
          <a href="#">Settings</a>
          <Link href="/" className={styles.logoutBtn}>Log Out</Link>
        </nav>
      </div>
      
      <div className={styles.main}>
        <h1 className={styles.welcomeTitle}>Dashboard</h1>
        
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Enrolled Courses</h3>
            <p className={styles.statValue}>3</p>
          </div>
          <div className={styles.statCard}>
            <h3>Tests Completed</h3>
            <p className={styles.statValue}>12</p>
          </div>
          <div className={styles.statCard}>
            <h3>Avg. Score</h3>
            <p className={styles.statValue}>84%</p>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Continue Learning</h2>
        <div className={styles.resumeCard}>
          <div className={styles.resumeInfo}>
            <span className={styles.tag}>In Progress</span>
            <h3>Class 12 Physics Revision</h3>
            <div className={styles.progressBar}><div className={styles.progressFill} style={{width: '65%'}}></div></div>
            <p>65% Complete • Next: Magnetism</p>
          </div>
          <button className={styles.resumeBtn}>Resume</button>
        </div>
      </div>
    </div>
  );
}
