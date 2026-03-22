"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme preference
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.highlight}>H2O</span> Study
        </Link>
        <div className={styles.links}>
          <Link href="/courses">Courses</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/tests">Mock Tests</Link>
        </div>
        <div className={styles.actions}>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {isDark ? "☀️" : "🌙"}
          </button>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
        </div>
      </div>
    </nav>
  );
}
