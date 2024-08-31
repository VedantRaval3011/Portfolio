import AboutMe from "@/components/aboutMe/AboutMe";
import Capabilities from "@/components/capabilities/Capabilities";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container">
      <AboutMe />
      <Capabilities />
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;
