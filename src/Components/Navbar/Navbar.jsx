import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import dp from "../../img/navbarsvg/dp.svg";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import resume from "../../Resume/fw21_0922_Faizan_Akhtar_Resume.pdf";
const Links = [
  { title: "Home", href: "intro" },
  { title: "About Me", href: "services" },
  { title: "Skills", href: "works" },
  { title: "Projects", href: "portfolio" },
  { title: "Contact", href: "contact" },
];

const NavLink = ({ children, onClose }) => (
  <Link to={children.href} spy={true} smooth={true}>
    <Text
      fontSize="xl"
      as="b"
      color={"white"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
        color: "#7c3aed",
      }}
      px={2}
      py={2}
      rounded={"md"}
      cursor="pointer"
      onClick={onClose}
    >
      {children.title}
    </Text>
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bgGradient="linear(to-r, #7c3aed, #9333ea)"
        px={10}
        position={"sticky"}
        top={0}
        left={0}
        // borderBottomRadius={"20%"}
        zIndex={999}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={"/Images/logo.png"} width={"120px"} />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.href}>{link}</NavLink>
              ))}
              <Box
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1HQnBOPvpcN1hlxDWOV94e0_q9F2UQDuh/view?usp=share_link"
                  );
                }}
              >
                <a href={resume} download={"fw21_0922_Faizan_Akhtar_Resume"}>
                  <Text
                    fontSize="xl"
                    as="b"
                    color={"white"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                      color: "#7c3aed",
                    }}
                    px={2}
                    py={2}
                    rounded={"md"}
                    cursor="pointer"
                  >
                    Resume
                  </Text>
                </a>
              </Box>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Avatar size={"lg"} src={dp} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.title} onClose={onClose}>
                  {link}
                </NavLink>
              ))}
              <Box
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1HQnBOPvpcN1hlxDWOV94e0_q9F2UQDuh/view?usp=share_link"
                  );
                }}
              >
                <a href={resume} download={"fw21_0922_Faizan_Akhtar_Resume"}>
                  <Text
                    fontSize="xl"
                    as="b"
                    color={"white"}
                    _hover={{
                      textDecoration: "none",
                      bg: "gray.200",
                      color: "#7c3aed",
                    }}
                    px={2}
                    py={2}
                    rounded={"md"}
                    cursor="pointer"
                  >
                    Resume
                  </Text>
                </a>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
