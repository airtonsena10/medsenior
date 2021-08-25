import { useEffect, useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

import logo from "../../assets/logo.png";

import Page from "../components/page";
import Container from "../components/container";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email Inválido!")
    .required("Este campo é obrigatório!"),
  password: Yup.string()
    .min(6, "A senha deve conter no mínimo 6 caracteres!")
    .required("Este campo é obrigatório!"),
  confirmPassword: Yup.string().when("password", (password: any, field: any) =>
    password
      ? field
          .oneOf(
            [Yup.ref("password")],
            "O campo Confirmar Senha deve ser igual ao campo Senha!",
          )
          .required()
      : field.required("Este campo é obrigatório!"),
  ),
});

export const Register = () => {
  const history = useHistory();
  const [visualizarSenha, setVisualizarSenha] = useState<boolean>(false);

  useEffect(() => {
    const state = localStorage.getItem("state");
    if (state) {
      const stateJson: boolean = JSON.parse(state);
      if (stateJson) {
        history.push("/home");
      } else {
        localStorage.setItem("state", JSON.stringify(false));
      }
    } else {
      localStorage.setItem("state", JSON.stringify(false));
    }
  }, []);

  function handleSubmit(data: any) {
    const email = data.email;
    const password = data.password;
    localStorage.setItem(
      "dados",
      JSON.stringify({
        email,
        password,
      }),
    );

    history.push("/");
  }

  const passwordReveal = () => setVisualizarSenha(!visualizarSenha);

  return (
    <Page>
      <Container>
        <img src={logo} alt="medsenior_logo" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <h3>Novo Registro</h3>
          <Input name="email" type="email" placeholder="Email" id="email" />

          <div id="passwordDiv">
            <Input
              id="password"
              name="password"
              type={visualizarSenha ? "text" : "password"}
              placeholder="Senha"
            />
            <button onClick={passwordReveal} type="button" id="olho">
              {visualizarSenha ? (
                <IoIosEyeOff size={24} color="#808080" />
              ) : (
                <IoIosEye size={24} color="#808080" />
              )}
            </button>
          </div>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            id="confirm"
          />

          <button type="submit" id="submit">
            REGISTRAR-SE
          </button>
        </Form>
      </Container>
    </Page>
  );
};
