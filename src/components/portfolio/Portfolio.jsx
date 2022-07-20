// import React from "react";
// import "./portfolio.css";
// import IMG from "../../assets/portfolio.jpg";
// import IMG1 from "../../assets/portfolio1.jpg";

// const data = [
//   {
//     id: 1,
//     image: IMG,
//     title: "Fixinity",
//     github: "https://github.com",
//     demo: "https://dribble.com/",
//   },
//   {
//     id: 2,
//     image: IMG1,
//     title: "Portfolio Item 2",
//     github: "https://github.com",
//     demo: "https://dribble.com/",
//   },
//   {
//     id: 3,
//     image: IMG,
//     title: "Portfolio Item 3",
//     github: "https://github.com",
//     demo: "https://dribble.com/",
//   },
//   {
//     id: 4,
//     image: IMG,
//     title: "Portfolio Item 4",
//     github: "https://github.com",
//     demo: "https://dribble.com/",
//   },
//   {
//     id: 5,
//     image: IMG,
//     title: "Portfolio Item 5",
//     github: "https://github.com",
//     demo: "https://dribble.com/",
//   },
//   {
//     id: 6,
//     image: IMG,
//     title: "Portfolio Item 5",
//     github: "https://github.com",
//     demo: "https://dribble.com/",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h5>MY Recent work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {
//           data.map(({ id, image, title, github, demo }) => {
//            return (
//               <article key={id} className="portfolio__item">
//                 <div className="portfolio__item-img">
//                   <img src={image} alt={title} srcset="" />
//                 </div>
//                 <h3> {title}</h3>
//                 <div className="portfolio__item-cta">
//                   <a href={github} className="btn" target="blank">
//                     Github
//                   </a>
//                   <a href={demo} className=" btn btn-primary" target="blank">
//                    Live Demo
//                   </a>
//                 </div>
//               </article>
//            )
//           })
//         }
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
