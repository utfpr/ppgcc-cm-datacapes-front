import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";
import React from "react";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="3"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="white"
        bg="transparent"
        _hover={{
          bg: "gray.700",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="14" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
