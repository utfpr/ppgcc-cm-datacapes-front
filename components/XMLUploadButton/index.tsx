import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

interface HTMLInputEvent extends ChangeEvent {
  target: HTMLInputElement & EventTarget;
}

/**
 *
 * @return {toast}
 */
export function XMLUploadButton() {
  const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [fileName, setFileName] = useState<string | undefined>("Enviar XML");

  const handleChange = (e: HTMLInputEvent) => {
    if (!e.target.files?.length) {
      return;
    }

    const files = e.target.files?.[0];

    if (files?.name.split(".").pop() !== "xml") {
      return toast.error("Formato errado.");
    }

    if (files?.size > 10000000) {
      return toast.error("Tamanho máximo excedido (10MB).");
    }

    setFileName(files?.name);
    
    var formData = new FormData();
    formData.append("arquivo", files)
    
    const api = axios.create({
      baseURL: 'http://localhost:3333'
    });

    try {
      api.post('/api/parser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch(error) {
      console.log(error)
    }
    
    return toast.success("Arquivo adicionado.");
  };

  return (
    <>
      <Button
        leftIcon={<FiUpload />}
        colorScheme="yellow"
        variant="solid"
        onClick={() => fileRef.current.click()}
      >
        {fileName}
      </Button>
      <Input
        ref={fileRef}
        onChange={handleChange}
        multiple={false}
        type="file"
        accept=".xml"
        sx={{ border: "none", display: "none" }}
      />
    </>
  );
}