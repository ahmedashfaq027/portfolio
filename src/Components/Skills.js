import React from "react";
import Skill from "./Skill";
import "./Skills.css";

function Skills({ skills, about }) {
  return (
    <div className="skills">
      <h1 className="section__header">Skills</h1>
      <p className="skills__description">{about?.skillsDescription}</p>
      <div className="skills__section">
        <h3>Some skills that I have:</h3>
        <div className="skills__container">
          {skills?.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
