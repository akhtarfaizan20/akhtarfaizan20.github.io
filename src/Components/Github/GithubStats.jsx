import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GithubStats = () => {
  return (
    <Box id="githubStats">
      <Heading textAlign="center" marginTop={"50px"}>
        Github <span className="themeText">stats</span>
      </Heading>
      <Center my={"30px"}>
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=akhtarfaizan20&layout=compact&hide_border=true&theme=radical"
          alt="Most used languages"
        />
      </Center>

      <Flex
        className="github-stats"
        justifyContent={"center"}
        direction={{ base: "column", lg: "row" }}
        mx={{ base: "5%", lg: "10%" }}
        my={"30px"}
        gap={"30px"}
      >
        <Image
          src="https://github-readme-stats.vercel.app/api?username=akhtarfaizan20&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical"
          alt="Github stats"
        />
        <Image
          src="https://github-readme-streak-stats.herokuapp.com/?user=akhtarfaizan20&layout=compact&hide_border=true&theme=radical"
          alt="Current Streaks"
        />
      </Flex>

      <Center
        mx={"auto"}
        my={"30px"}
        bgColor={"#141321"}
        color={"white"}
        p={"15px"}
        w={"fit-content"}
        borderRadius={"lg"}
      >
        <GitHubCalendar
          username="akhtarfaizan20"
          children={<ReactTooltip html />}
        />
      </Center>
    </Box>
  );
};

export default GithubStats;
