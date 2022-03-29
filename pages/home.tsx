import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Listing } from "../components/Listing";
import { Pagination } from "../components/Pagination";
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);
  return (
    <div>
      <XMLUploadButton />
      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
      <Listing />
    </div>
  );
}
