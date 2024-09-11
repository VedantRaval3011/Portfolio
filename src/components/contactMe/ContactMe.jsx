"use client";
import { Bebas_Neue } from "next/font/google";
import styles from "./contactMe.module.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const ContactMe = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.leftContent}>
          <h1 className={`${styles.title} ${bebasNeue.className}`}>
            LET'S CONNECT
          </h1>
          <p className={styles.text}>
            Say hello at{" "}
            <Link href="#" className={styles.mail}>
              vedantraval30@gmail.com
            </Link>
          </p>
          <p className={styles.text}>
            For more information, here's my{" "}
            <Link href="#" className={styles.resume}>
              resume
            </Link>
          </p>
        </div>
        <div className={styles.links}>
          <FaLinkedinIn className={styles.link} />
          <FaGithub className={styles.link} />
          <FaXTwitter className={styles.link} />
          <FaInstagram className={styles.link} />
        </div>
      </div>
      <div className={styles.rightContianer}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}  htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              className={styles.textarea}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
