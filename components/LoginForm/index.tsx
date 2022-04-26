import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

      actions.resetForm();
    },
  });

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="100vh"
      justifyContent="center"
      onSubmit={formik.handleSubmit}
    >
      <FormControl
        isInvalid={formik.errors.nickname && formik.touched.nickname}
      >
        <FormLabel>Apelido</FormLabel>
        <Input
          id="nickname"
          type="text"
          {...formik.getFieldProps("nickname")}
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
        ></Input>
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>
      <Button colorScheme="yellow" variant="solid" type="submit" onClick={}>
        Login
      </Button>
    </VStack>
  );
}
