import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import { Timeline } from "gsap/gsap-core";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    const getJsonData = async () => {
      await fetch(`${process.env.PUBLIC_URL}/resumeData.json`)
        .then((data) => data.json())
        .then((data) => setResumeData(data));
    };
    getJsonData();
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-links li");

    window.addEventListener("scroll", () => {
      const aboutSection = document
        .querySelector(".about")
        .getBoundingClientRect();
      const skillsSection = document
        .querySelector(".skills")
        .getBoundingClientRect();
      const resumeSection = document
        .querySelector(".resume")
        .getBoundingClientRect();
      const workSection = document
        .querySelector(".works")
        .getBoundingClientRect();
      const contactSection = document
        .querySelector(".contact")
        .getBoundingClientRect();

      if (aboutSection.top <= 50 && aboutSection.bottom >= 50)
        navLinks[0].classList.add("active");
      else navLinks[0].classList.remove("active");

      if (skillsSection.top <= 50 && skillsSection.bottom >= 50)
        navLinks[1].classList.add("active");
      else navLinks[1].classList.remove("active");

      if (resumeSection.top <= 50 && resumeSection.bottom >= 50)
        navLinks[2].classList.add("active");
      else navLinks[2].classList.remove("active");

      if (workSection.top <= 50 && workSection.bottom >= 50)
        navLinks[3].classList.add("active");
      else navLinks[3].classList.remove("active");

      if (contactSection.top <= 50 && contactSection.bottom >= 50)
        navLinks[4].classList.add("active");
      else navLinks[4].classList.remove("active");
    });
  }, []);

  return (
    <div className="app">
      {/* <Intro /> */}
      <Header logo={resumeData.logo} />
      <Home
        name={resumeData.name}
        background={resumeData.backgrounds}
        about={resumeData.about}
      />
      <About profilePic={resumeData.profilePic} about={resumeData.about} />
      <Skills skills={resumeData.skills} about={resumeData.about} />
      <Resume resume={resumeData.resume} background={resumeData.backgrounds} />
      <Works works={resumeData.works} about={resumeData.about} />
      <Contact
        name={resumeData.name}
        emailId={resumeData.emailId}
        about={resumeData.about}
      />
      <Footer social={resumeData.social} />
    </div>
  );
}

export default App;
