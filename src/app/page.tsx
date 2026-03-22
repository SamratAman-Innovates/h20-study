import Link from "next/link";
import CourseCard from "@/components/CourseCard/CourseCard";
import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./page.module.css";

const MOCK_COURSES = [
  { id: "c1", title: "Class 10 Science Crash Course", category: "Class 10", price: 499, rating: 4.8, thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400" },
  { id: "c2", title: "JEE Mains Mathematics 2024", category: "JEE", price: 999, rating: 4.9, thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400" },
  { id: "c3", title: "NEET Biology Masterclass", category: "NEET", price: 1299, rating: 4.7, thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400" },
  { id: "c4", title: "Class 12 Physics Revision", category: "Class 12", price: "Free" as const, rating: 4.6, thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400" },
];

const MOCK_VIDEOS = [
  { id: "v1", title: "One Shot: Chemical Reactions & Equations | Class 10", duration: "1:45:20", views: "125K", publishedAt: "2 days ago", thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2ef6?auto=format&fit=crop&q=80&w=400" },
  { id: "v2", title: "How to Score 95%+ in Board Exams", duration: "15:30", views: "340K", publishedAt: "1 week ago", thumbnail: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=400" },
  { id: "v3", title: "Integration Tricks for JEE/NDA", duration: "45:10", views: "89K", publishedAt: "5 days ago", thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400" },
];

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>#1 Platform for Indian Students</span>
            <h1 className={styles.heroTitle}>Master Your Exams with <br /><span className={styles.highlight}>H2O Study</span></h1>
            <p className={styles.heroSubtitle}>
              Access premium courses, free study materials, test series, and top-tier guidance to achieve your dream marks in Boards, JEE, and NEET.
            </p>
            <div className={styles.heroActions}>
              <Link href="/courses" className={styles.primaryBtn}>Explore Courses</Link>
              <a href="https://t.me/H2O_STUDY_OFFICIAL" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>Join Telegram</a>
            </div>
            <div className={styles.statsRow}>
              <div className={styles.statBox}><h3>100K+</h3><p>Students</p></div>
              <div className={styles.statBox}><h3>500+</h3><p>Lectures</p></div>
              <div className={styles.statBox}><h3>4.9/5</h3><p>Rating</p></div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.floatingCard}>✨ Free Tests Inside!</div>
            <img src="/owner.jpg" alt="H2O Study Founder and Lead Teacher" className={styles.heroImg} />
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Top Courses</h2>
              <p className={styles.sectionSubtitle}>Handpicked programs to accelerate your learning.</p>
            </div>
            <Link href="/courses" className={styles.viewAll}>View All Courses &rarr;</Link>
          </div>
          <div className={styles.gridFour}>
            {MOCK_COURSES.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Latest Free Lectures</h2>
              <p className={styles.sectionSubtitle}>Watch our newest high-yield video lectures directly from YouTube.</p>
            </div>
            <a href="https://www.youtube.com/@H2Ostudy" target="_blank" rel="noopener noreferrer" className={styles.ytBtn}>Subscribe on YouTube</a>
          </div>
          <div className={styles.gridThree}>
            {MOCK_VIDEOS.map(video => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.section} ${styles.blueBg}`}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>Why Choose H2O Study?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Structured Content</h3>
              <p>Well-organized chapters aligned with the latest CBSE/ICSE and competitive exam syllabus.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👩‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>Learn from teachers who have mentored top rankers over the years.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📝</div>
              <h3>Daily Practice</h3>
              <p>Topic-wise DPQs and comprehensive Test Series with instant analytics.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Learn Anywhere</h3>
              <p>Seamlessly access materials through our website or dedicated mobile application.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
