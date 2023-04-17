import React from "react";
import me from "../../img/intro/me.jpg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { Typewriter } from "react-simple-typewriter";
import SmoothList from "react-smooth-list";
import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import resume from "../../Resume/Faizan_Akhtar_Resume.pdf";
const Intro = () => {
  return (
    <SmoothList transitionDuration={2500} animated={true}>
      <Flex
        id="intro"
        pt={"30px"}
        alignContent={"center"}
        w={"fit-content"}
        m={"auto"}
        direction={"column"}
        textAlign={"center"}
        gap={"10px"}
      >
        <Heading size={"3xl"} color={"gray.600"} textAlign={"center"}>
          Hi, I am <span style={{ color: "#7c3aed" }}>Faizan Akhtar</span>
        </Heading>
        <Avatar
          src={me}
          m={"auto"}
          w={{ base: "60%", md: "30%" }}
          h={"auto"}
          transform="-scale(0.5)"
          transition="transform .5s"
          _hover={{
            cursor: "pointer",
            transform: "scale(0.8)",
          }}
        />
        <Heading size={"xl"} color={"gray.600"}>
          <Typewriter
            words={["A Full Stack Developer.", " A MERN Stack Developer."]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Heading>
        <Box
          w={"fit-content"}
          m={"auto"}
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1HQnBOPvpcN1hlxDWOV94e0_q9F2UQDuh/view?usp=share_link"
            );
          }}
        >
          {" "}
          <a
            href={resume}
            download={"Faizan_Akhtar_Resume"}
            style={{ textDecoration: "none" }}
          >
            <Button
              rightIcon={<DownloadIcon />}
              bgColor="#7c3aed"
              color={"white"}
              variant="solid"
              w={"fit-content"}
              m={"auto"}
              _hover={{
                bgColor: "#8b5cf6",
                transform: "scale(0.90)",
              }}
            >
              Resume
            </Button>
          </a>
        </Box>

        <Text
          as={"b"}
          color={"gray.500"}
          width={{ base: "90%", md: "750px" }}
          textAlign={"left"}
          m={"auto"}
        >
          A self-motivated, hard-working, and ambitious Full Stack Developer
          with proficiency in JavaScript and React. Problem-solving mindset and
          the ability to perform well in collaboration. Looking forward to
          working as an accountable and competent employee in an exciting tech
          company.
        </Text>
        <Flex justifyContent={"center"}>
          <a
            href="https://github.com/akhtarfaizan20"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <Avatar
              src={Github}
              transform="scale(0.5)"
              transition="transform .5s"
              w={"90px"}
              h={"100%"}
              _hover={{
                cursor: "pointer",
                transform: "scale(0.8)",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/faizan-akhtar-884b32198/"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <Avatar
              src={LinkedIn}
              transform="scale(0.5)"
              transition="transform .5s"
              w={"90px"}
              h={"100%"}
              _hover={{
                cursor: "pointer",
                transform: "scale(0.8)",
              }}
            />
          </a>
        </Flex>
      </Flex>
    </SmoothList>
  );
};

export default Intro;
