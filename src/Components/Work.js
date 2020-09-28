import React from "react";
import "./Work.css";

function Work({ name, description, image, url }) {
  return (
    <div className="work">
      <div className="work__background">
        <img
          className="work__img"
          src={`${process.env.PUBLIC_URL}/img/works/${image}`}
          alt={name}
        />
      </div>
      <div className="work__foreground">
        <a href={url} target="blank" className="work__link">
          <p>
            <i className="fas fa-link"></i>
            {description}
          </p>
        </a>
        <div className="work__name">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
