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
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ActiveLink } from "../ActiveLink";
import { useNavigate } from "react-router-dom";
interface LinkItemProps {
  name: string;
  href: string;
}

const LinkItems: Array<LinkItemProps> = [{ name: "Home", href: "/home" }];

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
    <Box bg={useColorModeValue("dark.black", "dark.black")} h="100px">
      <VStack
        as="form"
        mx="auto"
        w={{ base: "90%", md: 500 }}
        h="100vh"
        justifyContent="center"
        // onSubmit={formik.handleSubmit}
      >
        <Flex
          justifyContent={"center"}
          position="absolute"
          bottom={"3"}
          left="10"
          right={"10"}
        >
          <Image src="logo.svg" w="100px" />
        </Flex>
        <Formik
          initialValues={{ nickname: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (values.nickname.length < 4 || values.password.length < 4) {
              // errors.nickname = "Nome de usuário é muito curto";
              validationSchema: Yup.object({
                nickname: Yup.string()
                  .required("É necessário inserir um apelido")
                  .min(6, "Nickname é muito curto"),

                password: Yup.string().required(
                  "É necessário inserir uma senha"
                ),
              });
            }

            // if (values.password.length < 4) {
            //   errors.password = "Senha muito curta";
            // }
          }}
          onSubmit={(values, { setSubmitting }) => {
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

            // actions.resetForm();
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form>
              <FormControl
                isInvalid={formik.errors.nickname && formik.touched.nickname}
              >
                <FormLabel>Apelido</FormLabel>
                <Input
                  id="nickname"
                  type="text"
                  {...formik.getFieldProps("nickname")}
                  value={values.nickname}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  value={values.password}
                ></Input>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              {/* {LinkItems.map((link) => (
          <ActiveLink key={link.name} href={link.href}>
            <Button colorScheme="yellow" variant="solid" type="submit">
              Login
            </Button>
          </ActiveLink>
        ))} */}
              <Button
                colorScheme="yellow"
                variant="solid"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
      </VStack>
    </Box>
  );
}
