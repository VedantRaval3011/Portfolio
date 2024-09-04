"use client";
import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { Bebas_Neue } from "next/font/google";
import projects from "../../data/projects/projectsData.js";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
const Projects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  useEffect(() => {
    setFeaturedProjects(projects.slice(0, 3));
    console.log(featuredProjects);
    
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={`${styles.title} ${bebasNeue.className}`}>
          Featured Projects
        </h1>
        <p className={styles.desc}>
          Here are some of the selected projects that showcase my passion for
          web development.
        </p>
      </div>
      <div className={styles.projects}>
        {
          featuredProjects.map((project) => (
            <div key={project.id} className={styles.project}>
              <div className={styles.bg}>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className={styles.projectInfo}>
                <h2 className={styles.projectHeading}>{project.title}</h2>
                <p className={styles.projectDesc}>
                  {project.desc}
                </p>
                <div className={styles.projectContent}>
                  <h3 className={styles.contentHeading}>PROJECT INFO</h3>
                  <div className={styles.content}>
                    <p className={styles.year}>Year</p>
                    <p className={styles.yearNumber}>{project.year}</p>
                  </div>
                  <div className={styles.content}>
                    <p className={styles.role}>Role</p>
                    <p className={styles.tyleOfRole}>{project.role}</p>
                  </div>
                </div>
                <div className={styles.links}>
                <div className={styles.link}>
                  <p>Live Demo</p>
                  <CgArrowTopRight />
                </div>
                <div className={styles.link}>
                  <p>See on Github</p>
                  <FaGithub />
                </div>
              </div>
              </div>
              
            </div>
          ) )}
      </div>
    </div>
  );
};

export default Projects;
