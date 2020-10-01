import React from "react";
import "./Skill.css";

function Skill({ skill }) {
  return (
    <div key={skill.name} className="skill">
      <img
        src={`${process.env.PUBLIC_URL}/img/skills/${skill}.svg`}
        alt=""
        className={`${skill}`}
      ></img>
    </div>
  );
}

export default Skill;
