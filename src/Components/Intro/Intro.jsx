import React, { useContext } from "react";
import "./Intro.css";
import me from "../../img/intro/me.jpg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { Typewriter } from "react-simple-typewriter";
import SmoothList from "react-smooth-list";
import { useNavigate } from "react-router-dom";
import resume from "../../img/Resume/Faizan_Akhtar_Resume.pdf";
const Intro = () => {
  // Transition
  // const transition = { duration: 2, type: "spring" };

  // context
  const navigate = useNavigate();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <SmoothList transitionDuration={2500} animated={true}>
      <div className="Intro" id="intro">
        <div className="i-left">
          <div className="i-name ">
            <span style={{ color: darkMode ? "white" : "" }}>
              <div style={{ fontSize: "27px" }}>
                <h3 style={{ fontSize: "27px" }} className="helo anim">
                  Hello, my name is
                </h3>
              </div>
            </span>

            <span className="animate-charcte name anim">Faizan Akhtar</span>
            <h2 className="full_stack_h2 anim">
              I'm a
              <span className="full_stack anim">
                <Typewriter
                  words={[" Full Stack Web Developer.", " Web Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>

          <button
            className="resume shadow-lg shadow-cyan-500/50"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1HQnBOPvpcN1hlxDWOV94e0_q9F2UQDuh/view?usp=share_link"
              );
            }}
          >
            <a
              href={resume}
              download
              className="resum anim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>

          <div className="i-icons">
            <a
              href="https://github.com/akhtarfaizan20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/faizan-akhtar-884b32198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="linkdin" />
            </a>
          </div>
        </div>

        <div className="i-right">
          <img src={me} alt="me" className="my_img anim" />
        </div>
      </div>
    </SmoothList>
  );
};

export default Intro;
