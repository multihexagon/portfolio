/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/tech.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "IdioMaster",
    description:
      "An interactive tool that allows players to learn foreign languages with a bit of healthy competition.",
    url: "https://github.com/multihexagon/IdioMaster/tree/main",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Speaker and mentor for the Medellín University 'Web Development for Beginners' research group.",
    url: "https://ingenierias.udemedellin.edu.co/ingenieria-de-sistemas/#gsc.tab=0t",
  },
  {
    title: "Carreer Essentials in Generative AI",
    description: "By Microsoft and LinkedIn",
    url: "https://www.linkedin.com/learning/certificates/aab7c8cf8f8dd647b2b6255e77f85af974dbec276f1c092f1562bc4ec8c7d2bd",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "Serve my community as a Microsft Learn Student Ambassador by sharing kwnoledge, tools and experiences through the use and implementation of AI driven solutions with Microsoft tools.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/b634b2c0-9f7b-4053-9ae2-ce5a4f2b6c03",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
