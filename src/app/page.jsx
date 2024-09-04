import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "@/components/landingPage/LandingPage";
import Projects from "@/components/projects/Projects";
import AboutMe from "@/components/aboutMe/AboutMe";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <LandingPage />
      </div>
      <div className={styles.projectContainer}>
        <Projects />
      </div>
      <AboutMe />
    </>
  );
}
