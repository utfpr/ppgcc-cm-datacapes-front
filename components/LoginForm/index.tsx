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

export default function LoginForm() {
  // function errorMessageExample() {
  // function errorMessageExample() {
  // const [input, setInput] = useState("");

  // const handleInputChange = (e) => setInput(e.target.value);

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
      actions.resetForm();
    },
  });

  // const isError = input === "";

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="100vh"
      justifyContent="center"
      // onSubmit={formik.handleSubmit}
    >
      <FormControl
        isInvalid={formik.errors.nickname && formik.touched.nickname}
      >
        <FormLabel>Apelido</FormLabel>
        <Input
          id="nickname"
          type="text"
          value={formik.values.nickname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
          value={formik.values.password}
          onChange={formik.handleChange}
        ></Input>
        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
      </FormControl>
      <Button colorScheme="yellow" variant="solid" type="submit">
        Login
      </Button>
    </VStack>
  );
  // }
}
