import { useDisclosure, VStack } from "@chakra-ui/react";
import { Listing } from "../components/Listing";
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";

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

  return (
    <div>
      <VStack>
        <XMLUploadButton />
      </VStack>

      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
      <Listing data={dataTest} />
    </div>
  );
}
