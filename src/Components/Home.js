import React, { useEffect } from "react";
import "./Home.css";
import "../Utility/scrollUtility";
import smoothScroll from "../Utility/scrollUtility";

function Home({ name, background, about }) {
  useEffect(() => {
    const homeSection = document.querySelector(".home");
    homeSection.style.setProperty("--home", `url("/img/${background?.home}")`);
  }, [background]);

  useEffect(() => {
    window.addEventListener(
      "load",
      () => {
        const screenPosition = window.innerHeight;
        const homeText = document
          .querySelector(".home__textContent")
          .getBoundingClientRect().bottom;

        if (homeText < screenPosition) {
          document
            .querySelector(".home__textContent h1")
            .classList.add("homeText__appearEffect");
          document
            .querySelector(".home__textContent p")
            .classList.add("homeText__appearEffect");
          document
            .querySelector(".home__caretDown")
            .classList.add("caretIcon__appearEffect");
        }
      },
      []
    );
  });

  return (
    <div className="home">
      <div className="home__textContent">
        <h1>Hi, I'm {name?.firstName}</h1>
        <p>{about?.profession}</p>
      </div>
      <div
        className="home__caretDown"
        onClick={(e) => smoothScroll(".about", 1000)}
      >
        <i className="fas fa-angle-down"></i>
      </div>
    </div>
  );
}

export default Home;
