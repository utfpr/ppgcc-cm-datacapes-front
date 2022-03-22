import { Button } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";

interface XMLUploadButtonProps {
  onOpen: () => void;
}

export function XMLUploadButton({onOpen}: XMLUploadButtonProps){
    return (
  <Button leftIcon={<FiUpload />} colorScheme='yellow' variant='solid' onClick={onOpen}>
    Enviar XML
  </Button>
    )
}