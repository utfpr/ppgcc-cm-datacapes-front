import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function LoginForm() {
  // function errorMessageExample() {
  // function errorMessageExample() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="100vh"
      justifyContent="center"
    >
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Entre utilizando o email da universidade tecnológica federal do
            paraná.
          </FormHelperText>
        ) : (
          <FormErrorMessage>É necessário um email.</FormErrorMessage>
        )}

        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          id="password"
          type="password"
          value={input}
          onChange={handleInputChange}
        ></Input>
      </FormControl>
      <Button colorScheme="yellow" variant="solid">
        Login
      </Button>
    </VStack>
  );
  // }
}
