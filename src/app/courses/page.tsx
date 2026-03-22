import CourseCard from "@/components/CourseCard/CourseCard";
import styles from "./courses.module.css";

const MOCK_COURSES = [
  { id: "c1", title: "Class 10 Science Crash Course", category: "Class 10", price: 499, rating: 4.8, thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400" },
  { id: "c2", title: "JEE Mains Mathematics 2024", category: "JEE", price: 999, rating: 4.9, thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400" },
  { id: "c3", title: "NEET Biology Masterclass", category: "NEET", price: 1299, rating: 4.7, thumbnail: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=400" },
  { id: "c4", title: "Class 12 Physics Revision", category: "Class 12", price: "Free" as const, rating: 4.6, thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400" },
  { id: "c5", title: "NDA Mathematics Essentials", category: "NDA", price: 799, rating: 4.5, thumbnail: "https://images.unsplash.com/photo-1627889391060-1e52f1e6bba8?auto=format&fit=crop&q=80&w=400" },
  { id: "c6", title: "Python for Data Science", category: "Coding", price: 1499, rating: 4.9, thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400" },
];

export default function CoursesPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>All Courses</h1>
        <p className={styles.subtitle}>Explore our comprehensive library of premium and free courses tailored for Indian competitive exams.</p>
      </div>

      <div className={styles.filters}>
        <button className={styles.activeFilter}>All Courses</button>
        <button className={styles.filter}>Class 10</button>
        <button className={styles.filter}>Class 12</button>
        <button className={styles.filter}>JEE Mock</button>
        <button className={styles.filter}>NEET Pattern</button>
      </div>

      <div className={styles.grid}>
        {MOCK_COURSES.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
