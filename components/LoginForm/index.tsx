import {
  VStack,
  Button,
  Flex,
  Image,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, useFormState } from 'react-hook-form'
import axios from "axios";
import { Input } from './InputBase'

type SignInFormData = {
  username: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  username: yup.string().required("É necessário inserir um apelido").min(6, "Username é muito curto"),
  password: yup.string().required('É necessário inserir uma senha'),
})


export default function LoginForm() {
  const { register, handleSubmit, control } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  })



  const { isSubmitting, errors } = useFormState({
    control
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(async () => {
      await axios
        .get("/api/v1/auth", {
          headers: {
            username: values.username,
            password: values.password,
          },
        })
        .then((res) => console.log(res.data), resolve);
    }
      , 1200))

    console.log(values)
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleSignIn)}>
      <Box bg={useColorModeValue("dark.black", "dark.black")} h="100px">
        <VStack
          mx="auto"
          w={{ base: "90%", md: 500 }}
          h="100vh"
          justifyContent="center"
        >
          <Flex
            justifyContent={"center"}
            position="absolute"
            bottom={"3"}
            left="10"
            right={"10"}
          >
            <Image src="logo.svg" w="120px" />
          </Flex>

          <Input
            id="username"
            type="text"
            name="username"
            label="Nome de usuário"
            error={errors.username}
            {...register('username')}
          />
          <Input
            id="password"
            type="password"
            name="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          ></Input>

          <Button
            colorScheme="yellow"
            variant="solid"
            type="submit"
            isLoading={isSubmitting}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
