import { useDisclosure } from "@chakra-ui/react";
<<<<<<< HEAD
import { Listing } from "../components/Listing";
=======
import { useState } from "react";
import { Listing } from "../components/Listing";
import { Pagination } from "../components/Pagination";
>>>>>>> 34c90ab3a8dc91f41a976fb6100978482a0dfca8
import { XMLUploadButton } from "../components/XMLUploadButton";
import { XMLUploadModal } from "../components/XMLUploadModal";

export default function Home() {
<<<<<<< HEAD
  const { isOpen, onClose } = useDisclosure();

=======
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);
>>>>>>> 34c90ab3a8dc91f41a976fb6100978482a0dfca8
  return (
    <div>
      <XMLUploadButton />
      <XMLUploadModal isOpen={isOpen} onClose={onClose} />
      <Listing />
    </div>
  );
}
