import { Button, Input } from "@chakra-ui/react";
import {  ChangeEvent, useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { toast } from "react-toastify";


interface HTMLInputEvent extends ChangeEvent {
  target: HTMLInputElement & EventTarget;

}


export function XMLUploadButton(){

  const fileRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [fileName, setFileName] = useState< string | undefined>("Enviar XML");

  const handleChange = (e: HTMLInputEvent) => {
    if (!e.target.files?.length) {
      return;
    }

    var files = e.target.files?.[0];


    if(files?.name.split('.').pop() != "xml") {
      return toast.error('Formato errado.');
    }
    if(files?.size > 10000000){
      return toast.error('Tamanho máximo excedido (10MB).');
    }

    
    setFileName(files?.name);
    return toast.success('Arquivo adicionado.');
  };
 
    return (
      <>
  <Button leftIcon={<FiUpload />}  colorScheme='yellow' variant='solid' onClick={() => fileRef.current.click()}>
  {fileName}
  </Button>
    <Input
    ref={fileRef}
    onChange={(e) => handleChange(e)}
    multiple={false}
    type="file"
    accept=".xml"
    sx={{border: 'none',display: 'none'}}
  />
      </>
    )
}