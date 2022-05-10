import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";

interface HTMLInputEvent extends ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ModalEditAuthor({ isOpen, onClose }: ModalProps) {
  const [name, setName] = useState("Enviar Foto");
  const regExpImageFormat = /^.*\.(jpg|jpeg|png)$/i;

  const initialRef = useRef();
  const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleChange = (e: HTMLInputEvent) => {
    if (!e.target.files?.length) {
      return;
    }

    const files = e.target.files?.[0];

    if (!regExpImageFormat.test(files?.name)) {
      return toast.error("Formato errado.");
    }

    setName(files?.name);
    return toast.success("Arquivo adicionado.");
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar autor</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Foto</FormLabel>
              <Button
                leftIcon={<FiUpload />}
                onClick={() => fileRef.current.click()}
                colorScheme="yellow"
              >
                {name}
              </Button>
              <Input
                ref={fileRef}
                onChange={handleChange}
                multiple={false}
                type="file"
                sx={{ border: "none", display: "none" }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Nome</FormLabel>
              <Input ref={initialRef} placeholder="Digite o nome" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Instituição</FormLabel>
              <Input placeholder="Digite a instituição" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
