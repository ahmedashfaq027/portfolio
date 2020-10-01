import React, { useEffect } from "react";
import Skill from "./Skill";
import "./Skills.css";

function Skills({ skills, about }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const screenPosition = window.innerHeight;
      const worksContainer = document
        .querySelector(".skills__container")
        .getBoundingClientRect().top;

      if (worksContainer < screenPosition) {
        document
          .querySelector(".skills__container")
          .classList.add("skills__appearEffect");
      } else {
        document
          .querySelector(".skills__container")
          .classList.remove("skills__appearEffect");
      }
    });
  }, []);

  return (
    <div className="skills">
      <h1 className="section__header">Skills</h1>
      <p className="skills__description">{about?.skillsDescription}</p>
      <div className="skills__section">
        <h3 className="section__header">Some skills that I have:</h3>
        <div className="skills__container">
          {skills?.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
