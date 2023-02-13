import React, { useContext, useEffect } from "react";
import "./Portfolio.css";
import "swiper/css";
import { themeContext } from "../../Context";
import { project } from "./project";

import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "@chakra-ui/react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="portfolio" id="portfolio" data-aos="fade-right">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }} className="port_span">
        My Creative <span className="po"> Project </span>Section
      </span>

      <div className="grid_project">
        {project.map((item, index) => (
          <div
            className="pr_child"
            key={index}
            data-aos="slide-up"
            data-aos-duration="4000"
            // data-aos-delay="300"
          >
            <img src={item.img} alt="a" className="project_img" />
            <h3 className="pr_title">{item.title}</h3>
            <p className="pr_desc desc">{item.desc}</p>
            <br />

            <p className="pr_desc t_sk ">
              <span className="tech">Tech Stack: </span> {item.tech}
            </p>

            <div className="pr_flex">
              <a
                href={item.deploy}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: darkMode ? "white" : "black" }}
              >
                <Button colorScheme={"purple"} variant={"outline"}>
                  Live
                </Button>
              </a>

              <a
                href={item.git}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: darkMode ? "white" : "black" }}
              >
                <Button colorScheme={"purple"}>Codebase</Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
