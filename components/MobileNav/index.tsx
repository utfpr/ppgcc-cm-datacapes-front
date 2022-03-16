import { Flex, FlexProps, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface MobileProps extends FlexProps {
    onOpen: () => void;
  }
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        
        bg={useColorModeValue('dark.black', 'dark.black')}
        borderBottomWidth="1px"
        justifyContent="flex-start"
        {...rest}>
        <IconButton
          variant="outline"
          onClick={onOpen}
          color="white"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
      <Text fontSize="2xl" marginLeft={"5"} color="white" fontFamily="Poppins" fontWeight="bold">
        Datacapes
      </Text>
      <Flex justifyContent={"center"} position="absolute"  right={"10"}>
                    <Image src="logo3.svg" w="100px" />
                </Flex>
      </Flex>
    );
  };