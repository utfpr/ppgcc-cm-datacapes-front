import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Listing } from "../components/Listing";
import { Navbar } from "../components/Navbar";
import { Pagination } from "../components/Pagination";
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";

const dataTest = [
  {
    id: "aasd34-32-df-sdf3",
    title: "Teste",
    author: "joaozinho",
    email: "teste@teste.com",
  },
  {
    id: "aasd34-32-sddsf-sdf3",
    title: "artigo 2",
    author: "leonardo",
    email: "abc@teste.com",
  },
  {
    id: "aasd34-32-asasf-sdf3",
    title: "Artigo 3",
    author: "oliveira",
    email: "def@gmail.com",
  },
];

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);
  return (
    <Navbar>
      <XMLUploadButton />
      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
      <Listing data={dataTest} />
    </Navbar>
  );
}
