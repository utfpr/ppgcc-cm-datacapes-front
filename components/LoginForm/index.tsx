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
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("É necessário inserir um apelido")
        .min(6, "Username é muito curto"),

      password: Yup.string().required("É necessário inserir uma senha"),
    }),
    onSubmit: (values, actions) => {
      const navigate = useNavigate();

      alert(JSON.stringify(values, null, 2));
      console.log(values);

      const res = axios
        .get("/api/v1/auth", {
          headers: {
            username: values.username,
            password: values.password,
          },
        })
        .then((res) => res.data);

      navigate("/home");
      actions.resetForm();
    },
  });

  const isInvalid =
    formik.values.username == "" || formik.values.password == "";

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
            isInvalid={formik.errors.username && formik.touched.username}
          >
            <FormLabel>Username</FormLabel>
            <Input
              id="username"
              type="text"
              {...formik.getFieldProps("username")}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
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
