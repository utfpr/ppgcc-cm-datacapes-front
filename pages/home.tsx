import { useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";

export default function Home() {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Navbar>
      <XMLUploadButton />
      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
    </Navbar>
  );
}
