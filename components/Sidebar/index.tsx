import { Box, BoxProps, CloseButton, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from "react-icons/fi";
import { NavItem } from "../NavItem";


const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
];


interface LinkItemProps {
    name: string;
    icon: IconType;
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('dark', 'dark')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"

            {...rest}>
            <Box position="relative" display={"flex"} flexDir="column" h="100%" paddingBlockEnd={"100px"} >
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between" marginBlockEnd={"100px"}>
                    <Text fontSize="2xl" fontFamily="Poppins" fontWeight="bold">
                        Datacapes
                    </Text>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                <Box>
                    {LinkItems.map((link) => (
                        <NavItem key={link.name} icon={link.icon} fontSize={"sm"}>
                            {link.name}
                        </NavItem>
                    ))}
                </Box>
                <Flex justifyContent={"center"} position="absolute" bottom={"3"} left="10" right={"10"}>
                    <Image src="logo3.svg" w="100px" />
                </Flex>
            </Box>
        </Box>
    );
};

