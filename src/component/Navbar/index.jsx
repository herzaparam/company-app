"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/component/navbar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Rezilla</Link>
        </div>
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <ul>
            <li className={cx({ active: true })}>
              <Link href="/">Home</Link>
            </li>
            <li className={cx({ active: false })}>
              <Link href="/about">About</Link>
            </li>
            <li className={cx({ active: false })}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.bookButton}>
          <Link href="/book">Book</Link>
        </div>
        <button className={styles.hamburger} onClick={() => {}}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
