import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { CardAuthor } from "../components/CardAuthor";
import { Pagination } from "../components/Pagination";
import { SearchBox } from "../components/SearchBox";
import { useEffect, useState } from "react";
import { useAuthors } from "../services/hooks/useAuthors";
import { queryClient } from "../services/queryClient";
import { api } from "../services/api";

export default function Authors() {
  const [page, setPage] = useState(1);
  const [currentAuthors, setCurrentAuthors] = useState([]);
  const [numberAuthors, setNumberAuthors] = useState(0);
  const { data, error, isLoading } = useAuthors(
    page
  );

  // useEffect(() => {
  //   setCurrentAuthors(data.authors);
  //   setNumberAuthors(data.totalCount);
  // }, [page]);



  return (
    <Box m="8">
      <Flex justify={"center"} mb="10">
        <SearchBox />
      </Flex>
      <Wrap spacing={"3"} justify="center">
        {data.authors.map((author, index) => (
          <WrapItem key={index}>
            <CardAuthor
              id={author.id}
              name={author.name}
              institution={author.institution}
              lattes_id={author.lattes_id}
              orcid={author.orcid}
              key={author.id}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Pagination
        onPageChange={setPage}
        totalCountOfRegisters={data.totalCount}
        currentPage={page}
        registersPerPage={8}
        colorList={"dark.black"}
      />
    </Box>
  );
}
