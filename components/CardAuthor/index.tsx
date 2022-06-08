import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Link,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { FcGraduationCap } from "react-icons/fc";
import { Author } from "../../services/hooks/useAuthors";

export function CardAuthor({ id, institution, lattes_id, name, orcid }: Author) {
  const router = useRouter()
  return (
    <Box
      minW={"200px"}
      maxW={"200px"}
      w={"full"}
      bg={useColorModeValue("dark.black", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      position={"relative"}
      p={2}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={
          "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4761043E8"
        }
        mb={4}
        pos={"relative"}
      />
      <Heading fontSize={"15px"} fontFamily={"body"} color="white">
        {name}
      </Heading>
      <Text fontWeight={600} fontSize={"12px"} mb={4}>
        <Link href={"#"} color={"blue.400"}>
          ivanilton@utfpr.br
        </Link>
      </Text>
      <Text fontWeight={600} color={"white"} mb={4} fontSize={"10px"}>
        <Flex flexDir={"row"} align={"center"}>
          <span style={{ paddingRight: "5px", alignItems: "center" }}>
            <FcGraduationCap size="25px" spacing={"10px"} />
          </span>
          {institution}
        </Flex>
      </Text>

      <Stack mt={2} direction={"row"} spacing={4}>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"2xl"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={"lg"}
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
          onClick={() => router.push(`http://lattes.cnpq.br/${lattes_id}`)}
          formTarget="_blank"
        >
          Lattes
        </Button>
      </Stack>
    </Box>
  );
}
