import React from "react";
import "./experience.css";
import { BsJournalCheck } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5>The skills i Have</h5>
      <h2>Web dev experience</h2>

      <div className="container expercience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> HTML </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>

                <h4> CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> JavaScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> Bootstrap </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
               
                <h4> React</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> PHP</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> Responsive Web design </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> UX/UI </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> AJAX </h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3> Backend Developement</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> PHP </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck />
              <div>
                <h4> Laravel </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> MySQL </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> MariaDB </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> Object Oriented Programming </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div> 
                <h4> Node.js </h4>
              </div>
            </article>

            
          </div>
        </div>

        <div className="experience__other">
        <h3>Other</h3>
        <div className="experience__content">
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> Github/Gitkraken </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
            
                <h4> Agile </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> Scrum </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> Figma </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                {" "}
                <h4> Trello </h4>
              </div>
            </article>
            <article className="experience_details">
              <BsJournalCheck className='experience_details-icon' />
              <div>
                <h4> Microsoft Office </h4>
              </div>
            </article>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
