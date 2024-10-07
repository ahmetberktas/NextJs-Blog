import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span>BLOG</span>
      </Link>
      <nav className={styles.nav}>
        <Link href="https://github.com/ahmetberktas" target="_blank">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
