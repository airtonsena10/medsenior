import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    .required("Preencha o campo obrigatório!"),
  password: Yup.string()
    .required("Preencha o campo obrigatório!")
    .min(6, "A senha deve conter no mínimo 6 caracteres!"),
});

export const Login = () => {
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

  async function handleSubmit(data: any) {
    const dadosArmazenados = localStorage.getItem("dados");
    if (dadosArmazenados) {
      const dados = JSON.parse(dadosArmazenados);
      if (dados.email === data.email && dados.password === data.password) {
        localStorage.setItem("state", JSON.stringify(true));
        history.push("/home");
      } else {
        alert("Você não possui cadastro na aplicação!");
      }
    } else {
      alert("Você não possui cadastro na aplicação!");
    }
  }

  const passwordReveal = () => setVisualizarSenha(!visualizarSenha);

  return (
    <Page>
      <Container>
        <img src={logo} alt="logo_medsenior" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <h3>Entrar</h3>
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

          <Link to="/register">
            Não possui conta ainda?<a>Registre-se aqui!</a>
          </Link>

          <button type="submit" id="submit">
            ENTRAR
          </button>
        </Form>
      </Container>
    </Page>
  );
};
