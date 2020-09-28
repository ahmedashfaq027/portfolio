import { faIgloo } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import "./About.css";

function About({ profilePic, about }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const screenPosition = window.innerHeight;
      const profilePhoto = document
        .querySelector(".about__profilePhoto")
        .getBoundingClientRect().top;

      if (profilePhoto < screenPosition) {
        document
          .querySelector(".about__profilePhoto")
          .classList.add("about__appearEffect");
      } else {
        document
          .querySelector(".about__profilePhoto")
          .classList.remove("about__appearEffect");
      }

      const description = document
        .querySelector(".about__description")
        .getBoundingClientRect().top;

      if (description < screenPosition) {
        document
          .querySelector(".about__description")
          .classList.add("about__appearEffect");
      } else {
        document
          .querySelector(".about__description")
          .classList.remove("about__appearEffect");
      }

      const hobbies = document
        .querySelector(".about__hobbies")
        .getBoundingClientRect().top;

      if (hobbies < screenPosition) {
        document
          .querySelector(".about__hobbies")
          .classList.add("about__appearEffect");
      } else {
        document
          .querySelector(".about__hobbies")
          .classList.remove("about__appearEffect");
      }
    });
  }, []);

  return (
    <div className="about">
      <h1 className="section__header">A little bit about me</h1>
      <img
        className="about__profilePhoto"
        src={`${process.env.PUBLIC_URL}/img/${profilePic}`}
        alt=""
      />
      <p className="about__description">{about?.description}</p>
      <p className="about__hobbies">{about?.hobbies}</p>
    </div>
  );
}

export default About;
