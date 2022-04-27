import { useDisclosure } from "@chakra-ui/react";
import { Listing } from "../components/Listing";
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";

const dataTest = [
  {
    id: "aasd34-32-df-sdf3",
    title: "Teste a b c sjdbsakjd dgfs asd asd ",
    author: "joaozinho",
    email: "joaozinho@gmail.com",
  },
  {
    id: "aasd34-32-sddsf-sdf3",
    title: "hhhhhhhhhhhhhh a b c sjdbsakjd dgfs asd asd ",
    author: "dssssdghh",
    email: "aaaafffgfg@gmail.com",
  },
  {
    id: "aasd34-32-asasf-sdf3",
    title: "fdsdsfdfds a b c sjdbsakjd dgfs asd asd ",
    author: "sadasdsaddsa",
    email: "gfgffggfhr@gmail.com",
  },
];

export default function Home() {
  const { isOpen, onClose } = useDisclosure();
  return (
    <div>
      <XMLUploadButton />
      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
      <Listing data={dataTest} />
    </div>
  );
}
