import Link from "next/link";
import styles from "./VideoCard.module.css";

interface VideoCardProps {
  id: string; // YouTube video ID or internal ID
  title: string;
  duration: string;
  thumbnail: string;
  views: string;
  publishedAt: string;
}

export default function VideoCard({ id, title, duration, thumbnail, views, publishedAt }: VideoCardProps) {
  return (
    <Link href={`/videos/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <div 
          className={styles.thumbnail} 
          style={{ backgroundImage: `url(${thumbnail})` }}
          role="img" 
          aria-label={title}
        />
        <div className={styles.playOverlay}>
          <div className={styles.playIcon}>▶</div>
        </div>
        <span className={styles.durationBadge}>{duration}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.meta}>
          <span>{views} views</span>
          <span className={styles.dot}>•</span>
          <span>{publishedAt}</span>
        </div>
      </div>
    </Link>
  );
}
