import React, { useContext, useEffect } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import contact from "../../img/contact.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="contact_main"
      style={{ color: darkMode ? "white" : "" }}
      id="contact"
      data-aos-duration="5000"
      data-aos-delay="500"
    >
      <div className="heding_cont">
        <span style={{ color: darkMode ? "white" : "" }} className="get_touch">
          Get in Touch
          <span className="contact"> Contact </span> me
        </span>
      </div>
      <div className="contact_flex">
        <img
          src={contact}
          alt="msg"
          className="massge_img"
          data-aos="slide-left"
        />

        <div className="contact-form" data-aos="slide-right">
          <div className="c-right">
            <div className="up_cont">
              <BsFillTelephoneFill />
              <p>+91 9718245953</p>
            </div>
            <div>
              <HiOutlineMail className="md" />
              <p>akhtarfaizan20@gmail.com</p>
            </div>
            <div>
              <BsGithub />
              <p>https://github.com/akhtarfaizan20</p>
            </div>

            {/* <form ref={form} onSubmit={handleSubmit} action="https://formspree.io/f/xwkyadvj" method="POST"> */}

            <div className="con_img">
              <a
                href="https://www.linkedin.com/in/faizan-akhtar-884b32198/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkdin"
              >
                <BsLinkedin />
                <p>LinkedIn</p>
              </a>
              <a
                href="https://github.com/akhtarfaizan20"
                target="_blank"
                rel="noopener noreferrer"
                className="git_con"
              >
                <BsGithub />
                <p>GitHub</p>
              </a>
              <a
                href="mailto:akhtarfaizan20@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="git_con gmail"
              >
                <CgMail />
                <p>Gmail</p>
              </a>
            </div>

            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Your details has successfully sent.",
      description: "We will shortly get in touch with you.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="user w-full"
        name="name"
        id="name"
        placeholder="Name"
      />

      <input
        id="email"
        type="email"
        name="email"
        className="user w-full"
        placeholder="Email"
      />
      <textarea
        id="message"
        name="message"
        className="user w-full"
        placeholder="Messages"
      />
      <button type="submit" className="button_su bg-red-600">
        Submit
      </button>
    </form>
  );
}
