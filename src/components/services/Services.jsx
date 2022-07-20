import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>Services</h5>
      <h2>What else I can offer</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Language Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Luxembourgish </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Frensh </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> German </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> English </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Portuguese </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Spanish </p>
            </li>
         
          </ul>
        </article>

        {/* end of ui/ux */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
        
          </ul>
        </article>
        {/* end of service list */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor </p>
            </li>
        
          </ul>
        </article>
        {/* end of service list */}
      </div>
    </section>
  );
};

export default Services;
