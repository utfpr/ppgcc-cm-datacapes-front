import { useDisclosure } from "@chakra-ui/react";
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <XMLUploadButton  onOpen={onOpen}/>
      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}