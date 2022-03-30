import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import React from "react";

interface XMLUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 *
 * @return {modal}
 */
export function XMLUploadModal({ isOpen, onClose }: XMLUploadModalProps) {
  /**
   *
   * @param {FormEvent} event
   */
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit}>
          <ModalHeader>Anexe o arquivo</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Input type={"file"} accept=".xml" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" type="submit">
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
