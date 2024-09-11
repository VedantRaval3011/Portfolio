import React from "react";
import styles from "./aboutMe.module.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={`${styles.title} ${bebasNeue.className}`}>ABOUT ME</h1>
      </div>
      <div className={styles.content}>
        <h2 className={styles.contentHeader}>
          I am a freelancer & Web Developer based in India and have a background
          in Information Technology.
        </h2>
        <p className={styles.contentDesc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
          accusantium tempore distinctio voluptatibus, perferendis
          exercitationem nobis architecto accusamus recusandae optio, commodi
          est numquam reiciendis ex dolorem eligendi voluptatum labore
          consequuntur?
        </p>

        <div>
          <span className={styles.link}>More About Me</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
