import React from "react";
import "./Skill.css";

function Skill({ skill }) {
  return (
    <div
      key={skill.name}
      onMouseOver={(e) => (e.target.style.color = skill.color)}
      onMouseOut={(e) => (e.target.style.color = "")}
      className={`skill__container ${skill.name}`}
    >
      <i className={`${skill.icon}`}></i>
      <p className="skill__name">{skill.name}</p>
    </div>
  );
}

export default Skill;
