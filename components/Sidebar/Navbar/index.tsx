import React, { ReactNode } from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { MobileNav } from "../MobileNav";
import { SidebarContent } from "..";

/**
 *
 *
 */
export function Navbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box minH="100vh" bg={useColorModeValue("white", "white")}>
        <SidebarContent
          onClose={onClose}
          display={{ base: "none", md: "block" }}
        />

        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
