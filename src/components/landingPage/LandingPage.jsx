import React from "react";
import styles from "./landingPage.module.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import GameBoard from "../gameBoard/GameBoard";
import { Abril_Fatface } from "next/font/google";

const AbrilFatFace = Abril_Fatface({
  subsets:["latin"],
  weight:["400"]
})

// Load the Bebas Neue font
const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1 className={`${styles.heading} ${AbrilFatFace.className}`}>
          Hi, I am <br /> Vedant Raval.
        </h1>
        <h1 className={styles.subHeading}>{">"} Frontend Developer_</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <div className={styles.introFooter}>
          <button className={styles.button}>
            CONTACT ME
            <span className={styles.ArrowIcon}>
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
          <GameBoard/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
