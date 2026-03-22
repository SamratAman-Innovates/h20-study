import Link from "next/link";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  price: number | "Free";
  thumbnail: string;
  rating: number;
}

export default function CourseCard({ id, title, category, price, thumbnail, rating }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <div 
          className={styles.thumbnail} 
          style={{ backgroundImage: `url(${thumbnail})` }}
          role="img" 
          aria-label={title}
        />
        <span className={styles.categoryBadge}>{category}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.rating}>⭐ {rating.toFixed(1)}</div>
          <div className={styles.price}>
            {price === "Free" ? <span className={styles.freebadge}>Free</span> : `₹${price}`}
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.action}>View Details &rarr;</p>
      </div>
    </Link>
  );
}
