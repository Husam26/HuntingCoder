"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Import styles correctly

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu on mobile

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Logo or Title */}
        <div className={styles.logo}>
          <Link href="/" className={styles.brand}>Hunting Coder</Link>
        </div>

        {/* Hamburger Menu Icon (for small screens) */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
