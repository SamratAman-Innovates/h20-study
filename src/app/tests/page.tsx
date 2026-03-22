import styles from "./tests.module.css";

const MOCK_TESTS = [
  { id: "t1", title: "JEE Mains Full Syllabus Mock Test 1", subject: "PCM", questions: 90, time: "180 Mins", difficulty: "Hard" },
  { id: "t2", title: "CBSE Class 10 Science Board Pattern", subject: "Science", questions: 39, time: "180 Mins", difficulty: "Medium" },
  { id: "t3", title: "NEET Biology Grand Test", subject: "Biology", questions: 100, time: "90 Mins", difficulty: "Medium" },
  { id: "t4", title: "Daily Practice: Kinematics", subject: "Physics", questions: 15, time: "30 Mins", difficulty: "Easy" },
];

export default function TestsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mock Tests & Quizzes</h1>
        <p className={styles.subtitle}>Test your preparation with exam-level test series and instant analytics.</p>
      </div>

      <div className={styles.testGrid}>
        {MOCK_TESTS.map(test => (
          <div key={test.id} className={styles.testCard}>
            <div className={styles.testHeader}>
              <span className={styles.subject}>{test.subject}</span>
              <span className={`${styles.difficulty} ${styles[test.difficulty.toLowerCase()]}`}>{test.difficulty}</span>
            </div>
            <h3 className={styles.testTitle}>{test.title}</h3>
            <div className={styles.testMeta}>
              <span>⏱ {test.time}</span>
              <span>📝 {test.questions} Questions</span>
            </div>
            <button className={styles.startBtn}>Start Test Exam</button>
          </div>
        ))}
      </div>
    </div>
  );
}
