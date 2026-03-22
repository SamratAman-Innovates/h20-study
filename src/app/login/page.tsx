"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login & redirect
    window.location.href = "/dashboard";
  };

  return (
    <div className={styles.page}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p>{isLogin ? "Log in to access your courses" : "Join H2O Study today"}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
          )}
          <div className={styles.formGroup}>
            <label>Email ID</label>
            <input type="email" placeholder="student@example.com" required />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className={styles.submitBtn}>
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button className={styles.toggleBtn} onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
