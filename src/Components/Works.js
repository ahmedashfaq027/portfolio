import React, { useEffect } from "react";
import "./Works.css";
import Work from "./Work";

function Works({ works, about }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const screenPosition = window.innerHeight;
      const worksContainer = document
        .querySelector(".works__container")
        .getBoundingClientRect().top;

      if (worksContainer < screenPosition) {
        document
          .querySelector(".works__container")
          .classList.add("works__appearEffect");
      } else {
        document
          .querySelector(".works__container")
          .classList.remove("works__appearEffect");
      }
    });
  }, []);

  return (
    <div className="works">
      <h1 className="section__header">What I've Done</h1>
      <p className="works__description">{about?.worksDescription}</p>
      <div className="works__container">
        {works?.map((work) => (
          <Work
            key={work.name}
            name={work.name}
            description={work.description}
            image={work.image}
            url={work.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
