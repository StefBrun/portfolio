import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image " >
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experiences</h5>
              <small>Projects</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              {/* make button that leads to other page */}

              <h5>Clients</h5>
              <small>No clients ATM</small>
            </article>
            <article className="about__card">
              <AiOutlineFolder className="about__icon" />
              <h5>Projects</h5>
              <small> completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos
            debitis, voluptatem quisquam in saepe mollitia incidunt delectus!
            Cumque ipsa maxime sapiente commodi recusandae mollitia aliquid
            libero, doloribus ab nobis?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
