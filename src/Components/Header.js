import React, { useEffect, useRef, useState } from "react";
import smoothScroll from "../Utility/scrollUtility";
import "./Header.css";

function Header({ logo }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const navLinksRef = useRef(null);
  const firstTimeUpdate = useRef(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY < 30);
    });

    document.body.addEventListener(
      "click",
      (e) => {
        if (!e.target.classList.contains("hamburger")) {
          setIsHamburgerOpen(false);
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    if (firstTimeUpdate.current) {
      firstTimeUpdate.current = false;
      return;
    }

    const navLinks = document.querySelector(".nav-links");
    if (isHamburgerOpen) {
      navLinks.classList.add("show__navLinks");
    } else {
      navLinks.classList.remove("show__navLinks");
    }
  }, [isHamburgerOpen]);

  return (
    <div
      className="header"
      style={
        isTop
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "black" }
      }
    >
      <a href="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/${logo}`} alt="" />
        <h1>Ashfaq Ahmed</h1>
      </a>
      <ul className="nav-links" ref={navLinksRef}>
        <li onClick={(e) => smoothScroll(".about", 1000)}>About</li>
        <li onClick={(e) => smoothScroll(".skills", 1000)}>Skills</li>
        <li onClick={(e) => smoothScroll(".resume", 1000)}>Resume</li>
        <li onClick={(e) => smoothScroll(".works", 1000)}>Works</li>
        <li onClick={(e) => smoothScroll(".contact", 1000)}>Contact</li>
      </ul>
      <div
        className="hamburger"
        onClick={(e) => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        <div className="hamburger__top"></div>
        <div className="hamburger__middle"></div>
        <div className="hamburger__bottom"></div>
      </div>
    </div>
  );
}

export default Header;
