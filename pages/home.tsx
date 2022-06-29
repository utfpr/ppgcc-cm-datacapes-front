import { Button, Input, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Listing } from "../components/Listing";
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";
import { api } from "../services/api";




const dataTest = [
  {
    id: "aasd34-32-df-sdf3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    publi_type: "Artigo",
    authors: [
      "Ivanilton polato",
      "Sebastin polato",
    ],
    qualis: "A",
    year: "2020",
  },
  {
    id: "aasd34-32-sddsf-sdf3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    publi_type: "Artigo",
    authors: [
      "Ivanilton polato",
      "Juanito",
    ],
    qualis: "A",
    year: "2020",
  },
  {
    id: "aasd34-32-asasf-sdf3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    publi_type: "Artigo",
    authors: [
      "Ivanilton polato",
      "Fernando",
    ],
    qualis: "A",
    year: "2020",
  },
];

export default function Home() {
  const { isOpen, onClose } = useDisclosure();
  const [author, setAuthor] = useState(0);


  const handleSearchAuthor = async () => {
    const { data } = await api.get(`/authors/${author}`);

    console.log(data);
  }
  return (
    <div>
      <VStack>
        <Text>
          Teste /api/parser
        </Text>
        <XMLUploadButton />
        <Text pt="5">
          Teste /api/authors/:id
        </Text>
        <Input type="number" value={author} onChange={
          (e) => setAuthor(Number(e.target.value))
        } w="200" />
        <Button onClick={handleSearchAuthor}>Send</Button>

      </VStack>

      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
      <Listing data={dataTest} />
    </div>
  );
}
