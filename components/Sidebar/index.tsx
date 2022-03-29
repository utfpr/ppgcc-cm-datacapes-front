import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FiHome,
  FiUser,
  FiPaperclip,
  FiFileText,
  FiFilePlus,
} from "react-icons/fi";
import { ActiveLink } from "../ActiveLink";
import { NavItem } from "../NavItem";
import React from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, href: "/home" },
  { name: "Artigos", icon: FiPaperclip, href: "/articles" },
  { name: "Documentos", icon: FiFileText, href: "/documents" },
  { name: "Autores", icon: FiUser, href: "/authors" },
  { name: "Relatório", icon: FiFilePlus, href: "/report" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("dark.black", "dark.black")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Box
        position="relative"
        display={"flex"}
        flexDir="column"
        h="100%"
        paddingBlockEnd={"100px"}
      >
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          justifyContent="space-between"
          marginBlockEnd={"100px"}
        >
          <Text
            fontSize="3xl"
            color="white"
            fontFamily="Poppins"
            fontWeight="bold"
          >
            Datacapes
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Box>
          {LinkItems.map((link) => (
            <ActiveLink key={link.name} href={link.href}>
              <NavItem icon={link.icon} fontSize={"1.15rem"}>
                {link.name}
              </NavItem>
            </ActiveLink>
          ))}
        </Box>
        <Flex
          justifyContent={"center"}
          position="absolute"
          bottom={"3"}
          left="10"
          right={"10"}
        >
          <Image src="logo3.svg" w="100px" />
        </Flex>
      </Box>
    </Box>
  );
};
