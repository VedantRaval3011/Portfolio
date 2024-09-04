"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";  // Menu icon
import { IoClose } from "react-icons/io5";  // Close icon

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathName = usePathname();
  useEffect(() => {
    switch (pathName) {
      case "/work":
        setActiveLink(0);
        break;
      case "/blog":
        setActiveLink(1);
        break;
      case "/about":
        setActiveLink(2);
        break;
      default:
        setActiveLink(null);
        break;
    }
  }, [pathName]);

  const handleClick = (index) => {
    setActiveLink(index);
    setMobileMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo} onClick={() => setActiveLink(null)}>
        <h2 className={bebasNeue.className}>Vedant Raval</h2>
      </Link>

      <div className={styles.items}>
        <Link
          href="/work"
          className={`${styles.item} ${activeLink === 0 ? styles.active : ""}`}
          onClick={() => handleClick(0)}
        >
          Work
        </Link>
        <Link
          href="/blog"
          className={`${styles.item} ${activeLink === 1 ? styles.active : ""}`}
          onClick={() => handleClick(1)}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={`${styles.item} ${activeLink === 2 ? styles.active : ""}`}
          onClick={() => handleClick(2)}
        >
          About
        </Link>
        <span
          className={`${styles.item} ${activeLink === 3 ? styles.active : ""}`}
          onClick={() => handleClick(3)}
        >
          Contact
        </span>
      </div>

      {/* Conditional rendering of more and close buttons */}
      {!isMobileMenuOpen ? (
        <button className={styles.moreButton} onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </button>
      ) : (
        <button className={styles.closeButton} onClick={() => setMobileMenuOpen(false)}>
          <IoClose />
        </button>
      )}

      {/* Full screen mobile menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.menuItems}>
            <Link
              href="/work"
              className={`${styles.item} ${activeLink === 0 ? styles.active : ""}`}
              onClick={() => handleClick(0)}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className={`${styles.item} ${activeLink === 1 ? styles.active : ""}`}
              onClick={() => handleClick(1)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`${styles.item} ${activeLink === 2 ? styles.active : ""}`}
              onClick={() => handleClick(2)}
            >
              About
            </Link>
            <span
              className={`${styles.item} ${activeLink === 3 ? styles.active : ""}`}
              onClick={() => handleClick(3)}
            >
              Contact
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
