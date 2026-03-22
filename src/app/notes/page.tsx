import styles from "./notes.module.css";

const MOCK_NOTES = [
  { id: "n1", title: "Carbon and its Compounds Complete Notes", subject: "Chemistry", size: "2.4 MB" },
  { id: "n2", title: "Current Electricity Formula Sheet", subject: "Physics", size: "1.1 MB" },
  { id: "n3", title: "Control and Coordination Mind Map", subject: "Biology", size: "3.5 MB" },
  { id: "n4", title: "Integration Important Questions", subject: "Math", size: "1.8 MB" },
];

export default function NotesPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Study Materials & Notes</h1>
        <p className={styles.subtitle}>Free downloadable PDF notes and mind maps for quick revision.</p>
      </div>

      <div className={styles.notesList}>
        {MOCK_NOTES.map(note => (
          <div key={note.id} className={styles.noteItem}>
            <div className={styles.noteIcon}>📄</div>
            <div className={styles.noteDetails}>
              <h3>{note.title}</h3>
              <p>{note.subject} • {note.size}</p>
            </div>
            <a href="#" className={styles.downloadBtn}>Download PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
}
