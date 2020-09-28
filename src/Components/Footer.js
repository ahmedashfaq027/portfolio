import React from "react";
import "./Footer.css";

function Footer({ social }) {
  const scottyHandler = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="social">
        {social?.map((item) => (
          <a
            key={item.name}
            href={item.url}
            rel="noopener noreferrer"
            target="blank"
            onMouseOver={(e) => (e.target.style.backgroundColor = item.color)}
            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
            className={`link ${item.name}`}
          >
            <i className={`fab ${item.icon}`}></i>
          </a>
        ))}
      </div>

      <div className="goTop">
        <img
          onClick={scottyHandler}
          className="scotty"
          src={process.env.PUBLIC_URL + "/img/rocket-top.png"}
          alt=""
        />
        <p className="scottyText">Beam me up, scotty</p>
      </div>

      <div className="copyrightInfo">
        <p>
          &#169; All credit goes to Ashfaq Ahmed - Copyright 2020 Ashfaq Ahmed
        </p>
      </div>
    </div>
  );
}

export default Footer;
