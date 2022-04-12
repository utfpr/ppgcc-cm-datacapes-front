import {
  Box,
  Flex,
  Link,
  Button,
  Icon,
  Checkbox,
  Td,
  Text,
  Table,
  Tbody,
  Thead,
  Th,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiFileCopy2Fill } from "react-icons/ri";
import { Pagination } from "../../components/Pagination/index";
import NextLink from "next/link";
import { useState } from "react";
import { SearchBox } from "./SearchBox";

interface ListingProps {
  data: {
    id: string;
    title: string;
    author: string;
    email: string;
  }[];
}

export function Listing({ data }: ListingProps) {
  const [page, setPage] = useState(1);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Box flex="1" borderRadius={8} bg="dark.black" p="6">
          <Flex mb="8" justify="space-between" align="center">
            <SearchBox />
            <NextLink href={"/users/create"} passHref>
              <Button
                as="a"
                size="md"
                fontSize="sm"
                bg="yellow.orange"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Gerar relatório
              </Button>
            </NextLink>
          </Flex>
          <>
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" w="8">
                    <Checkbox colorScheme="yellow" />
                  </Th>
                  <Th color="gray.200">Titulo</Th>
                  {isWideVersion && <Th color="gray.200">Autor</Th>}
                  <Th w="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, index) => (
                  <Tr key={item.id}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="yellow" />
                    </Td>
                    <>
                      <Td color={"white"} maxW={200}>
                        {item.title}
                      </Td>
                      {isWideVersion && (
                        <Td color={"white"}>
                          <Box>
                            <Link color={"white"}>
                              <Text fontWeight="bold">{item.author}</Text>
                            </Link>
                            <Text fontSize="sm" color="gray.300">
                              {item.email}
                            </Text>
                          </Box>
                        </Td>
                      )}
                    </>

                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        bg="gray.200"
                        pr={!isWideVersion && "5px"}
                        leftIcon={<Icon as={RiFileCopy2Fill} fontSize="16" />}
                      >
                        {isWideVersion ? "Link" : ""}
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Pagination
              totalCountOfRegisters={100}
              currentPage={1}
              registersPerPage={10}
              onPageChange={setPage}
            />
          </>
        </Box>
      </Flex>
    </Box>
  );
}
