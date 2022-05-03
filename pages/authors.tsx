import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { CardAuthor } from "../components/CardAuthor";
import { Pagination } from "../components/Pagination";
import { SearchBox } from "../components/SearchBox";

export default function Authors() {
  return (
    <Box m="8">
      <Flex justify={"center"} mb="10">
        <SearchBox />
      </Flex>
      <Wrap spacing={"3"} justify="center">
        {[...new Array(8)].map((_, index) => (
          <WrapItem key={index}>
            <CardAuthor />
          </WrapItem>
        ))}
      </Wrap>
      <Pagination
        onPageChange={() => { }}
        totalCountOfRegisters={100}
        currentPage={1}
        registersPerPage={8}
        colorList={"dark.black"}
      />
    </Box>
  );
}
