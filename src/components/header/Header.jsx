import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";

import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am </h5>
        <h1>Stefano Brunialti</h1>
        <h1 className="dev">Fullstack Developer</h1>

        <CTA />
        <HeaderSocials />

        <div className="split-header">
          <div className="div-header">
            <h1> Welcome <br /> </h1>

            <h3>
              {" "}
              <br />{" "}
            </h3>
            <br />
            <p>
              I graduated from web development bootcamp by NumericAll and CNFPC.
              I have a passion for learning and I am always looking to improve
              my skills and gain new knowledge. <br />
              
              <br />I look forward to working with you and helping you build something great.
            </p>
          </div>

          <div className="me">
            <img className="meme" src={ME} alt="me" />
          </div>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
