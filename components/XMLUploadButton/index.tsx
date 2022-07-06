import { Button, Input } from "@chakra-ui/react";
import { ChangeEvent, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";
import React from "react";
import { api } from "../../services/api";

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

  const handleChange = async (e: HTMLInputEvent) => {
    if (!e.target.files?.length) {
      return;
    }

    const file = e.target.files?.[0];

    if (file?.name.split(".").pop() !== "xml") {
      return toast.error("Formato errado.");
    }

    if (file?.size > 10000000) {
      return toast.error("Tamanho máximo excedido (10MB).");
    }

    setFileName(file?.name);

    const formData = new FormData();
    formData.append("arquivo", file, "curriculo.xml");
    try {
      const { data } = await api.post("/parser", file);

      console.log(data);
    }
    catch (err) {
      console.log(err);
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
