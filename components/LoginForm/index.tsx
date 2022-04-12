import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
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
      onSubmit={formik.handleSubmit}
    >
      <FormControl>
        <FormLabel>Apelido</FormLabel>
        <Input
          id="nickname"
          type="text"
          value={formik.values.nickname}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        ></Input>
      </FormControl>
      <Button colorScheme="yellow" variant="solid" type="submit">
        Login
      </Button>
    </VStack>
  );
  // }
}
