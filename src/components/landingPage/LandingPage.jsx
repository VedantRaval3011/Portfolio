import React from "react";
import styles from "./landingPage.module.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Bebas_Neue } from "next/font/google";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1 className={`${styles.heading} ${bebas_neue.className}`}>
          HI, I AM <br /> VEDANT RAVAL.
        </h1>
        <h1 className={styles.subTitle}>{">"} Frontend Developer_</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <div className={styles.introFooter}>
          <button className={styles.button}>
            CONTACT ME
            <span className={styles.ArrowIcon}>
              {" "}
              <HiArrowTopRightOnSquare />
            </span>
          </button>
          <div className={styles.icon}>
            
            <SlSocialLinkedin />
          </div>
          <div className={styles.icon}>
            <FaGithub />
          </div>
        </div>
      </div>
      <div className={styles.gameContainer}>
        <div className={styles.bg}>
          <p>game</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
