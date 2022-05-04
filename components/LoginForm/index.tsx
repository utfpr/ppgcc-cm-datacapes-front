import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  FormErrorMessage,
  Flex,
  Image,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      nickname: "",
      password: "",
    },
    validationSchema: Yup.object({
      nickname: Yup.string()
        .required("É necessário inserir um apelido")
        .min(6, "Nickname é muito curto"),

      password: Yup.string().required("É necessário inserir uma senha"),
    }),
    onSubmit: (values, actions) => {
      const navigate = useNavigate();

      alert(JSON.stringify(values, null, 2));
      console.log(values);

      const res = axios
        .get("/api/v1/auth", {
          headers: {
            nickname: values.nickname,
            password: values.password,
          },
        })
        .then((res) => res.data);

      navigate("/home");
      actions.resetForm();
    },
  });

  const isInvalid =
    formik.values.nickname == "" || formik.values.password == "";

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box bg={useColorModeValue("dark.black", "dark.black")} h="100px">
        <VStack
          as="form"
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

          <FormControl
            isInvalid={formik.errors.nickname && formik.touched.nickname}
          >
            <FormLabel>Username</FormLabel>
            <Input
              id="nickname"
              type="text"
              {...formik.getFieldProps("nickname")}
              value={formik.values.nickname}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.nickname}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              type="password"
              {...formik.getFieldProps("password")}
              onChange={formik.handleChange}
              value={formik.values.password}
            ></Input>
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>

          <Button
            colorScheme="yellow"
            variant="solid"
            type="submit"
            disabled={isInvalid}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </form>
  );
}
