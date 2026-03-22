import VideoCard from "@/components/VideoCard/VideoCard";
import styles from "./videos.module.css";

const MOCK_VIDEOS = [
  { id: "v1", title: "One Shot: Chemical Reactions & Equations | Class 10", duration: "1:45:20", views: "125K", publishedAt: "2 days ago", thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2ef6?auto=format&fit=crop&q=80&w=400" },
  { id: "v2", title: "How to Score 95%+ in Board Exams", duration: "15:30", views: "340K", publishedAt: "1 week ago", thumbnail: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=400" },
  { id: "v3", title: "Integration Tricks for JEE/NDA", duration: "45:10", views: "89K", publishedAt: "5 days ago", thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400" },
  { id: "v4", title: "Electricity Full Chapter Revision", duration: "2:10:05", views: "500K", publishedAt: "1 month ago", thumbnail: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=400" },
];

export default function VideosPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Free YouTube Lectures</h1>
        <p className={styles.subtitle}>Watch our expertly crafted video lectures directly from our YouTube channel.</p>
        <a href="https://www.youtube.com/@H2Ostudy" target="_blank" rel="noopener noreferrer" className={styles.subscribeBtn}>
          Subscribe to Channel
        </a>
      </div>

      <div className={styles.grid}>
        {MOCK_VIDEOS.map(video => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
}
