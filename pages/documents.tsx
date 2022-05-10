import { Button, useDisclosure } from "@chakra-ui/react";
import { ModalEditAuthor } from "../components/ModalEditAuthor";

export default function Documents() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Abrir modal edit</Button>
      <ModalEditAuthor isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
