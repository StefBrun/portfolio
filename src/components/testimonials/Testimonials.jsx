import React from "react";
import "./testimonials.css";

import AVTR1 from "../../assets/avatar.jpg";
import AVTR2 from "../../assets/avatar.jpg";
import AVTR3 from "../../assets/avatar.jpg";
import AVTR4 from "../../assets/avatar.jpg";
import AVTR5 from "../../assets/avatar.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Client 1",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptas atque et, obcaecati aliquam omnis nemo error reiciendis totam laudantium impedit amet corrupti reprehenderit tenetur molestiae deleniti aspernatur dolores saep",
  },
  {
    avatar: AVTR2,
    name: "Client 2",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptas atque et, obcaecati aliquam omnis nemo error reiciendis totam laudantium impedit amet corrupti reprehenderit tenetur molestiae deleniti aspernatur dolores saep",
  },
  {
    avatar: AVTR3,
    name: "Client 3",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptas atque et, obcaecati aliquam omnis nemo error reiciendis totam laudantium impedit amet corrupti reprehenderit tenetur molestiae deleniti aspernatur dolores saep",
  },
  {
    avatar: AVTR4,
    name: "Client 4",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptas atque et, obcaecati aliquam omnis nemo error reiciendis totam laudantium impedit amet corrupti reprehenderit tenetur molestiae deleniti aspernatur dolores saep",
  },
  {
    avatar: AVTR5,
    name: "Client 5",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptas atque et, obcaecati aliquam omnis nemo error reiciendis totam laudantium impedit amet corrupti reprehenderit tenetur molestiae deleniti aspernatur dolores saep",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}

       pagination={{ clickable: true }}>

        
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt=" " />
                <h5 className="client__name">{name}</h5>
              </div>
              <h5 className="client__name"> Client</h5>

              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
