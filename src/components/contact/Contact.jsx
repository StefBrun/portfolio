import React from "react";
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai";
import {RiMessengerLine} from "react-icons/ri";
import {AiOutlineWhatsApp} from "react-icons/ai";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
// emailjs setup

 const form = useRef();
 const sendEmail = (e) => {


  e.preventDefault();

  emailjs.sendForm('service_mrb93kn', 'template_5tfmk7e', form.current, '3i2oBmBniv_mnx9jl')
  
  e.target.reset();
  
};

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>brunialti.stefano@gmail.com</h5>
            <a href="mailto:brunialti.stefano@gmail.com" target="blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__icon"/>
            <h4>Messenger</h4>
            <h5>Stefano Brunialti</h5>
            <a href="https://m.me/brunialti.stefano" target="blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__icon" />
            <h4>Whatsapp</h4>
            <h5>+352 621 830 021</h5>
            <a href="https://api.whatsapp.com/send?phone=352621830021" target="blank">Send a message</a>
          </article>
        </div>

     
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email"  required/>
          <textarea name="message" rows="7" placeholder="Send me a message :D" reaquired></textarea>
          <button type="submit" className="btn btn-primary"> Send Message </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
