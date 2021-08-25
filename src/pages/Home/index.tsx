import { useEffect, useState } from "react";
import { Form } from "@rocketseat/unform";
import { useHistory } from "react-router-dom";

import api from "axios";
import logo from "../../assets/logo.png";

import Page from "../components/page";
import { Content, ContentSecondary } from "./styles";

export const Home = () => {
  const history = useHistory();
  const [Ip, setIp] = useState<any>(0);
  const [acessoLiberado, setAcessoLiberado] = useState(false);

  async function getIp() {
    const ip: any = await api.get("http://www.geoplugin.net/json.gp");
    setIp(ip.data.geoplugin_request);
  }

  useEffect(() => {
    getIp();
    const state = localStorage.getItem("state");
    if (state) {
      const stateJson: boolean = JSON.parse(state);
      setAcessoLiberado(stateJson);
    }
  }, []);

  function logout() {
    localStorage.setItem("state", JSON.stringify(false));
    history.push("/");
  }

  const voltarParaLogin = () => history.push("/");

  return acessoLiberado ? (
    <Page>
      <Content>
        <img src={logo} alt="logo_medsenior" />
        <h3>Bem-Vindo!</h3>
        <h4>Agora você é um filiado!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent neque
          accumsan consequat, posuere dolor, arcu nisl nunc pellentesque sed
          viverra sit enim.Mattis arcu at dolor pulvinar ultricies euismod duis
          mattis. Volupat phasellus turpis enim odio. Vitae auctor morbi mi
          purus in at neque accumsan, fermentum.Ultrices placerat malesuada
          porta arcu nibh luctus eu. Sagittis ut adipiscing consectetur in est
          porte mollis in.Vitae infaucibus tellus ametneque imperdiet.
          <br></br>
          Leo tellus diam dui augue morbi sed.
        </p>

        <Form onSubmit={logout}>
          <a>ip: {Ip} </a>
          <button type="submit">LOGOUT</button>
        </Form>
      </Content>
    </Page>
  ) : (
    <ContentSecondary>
      <h1>Você não possui permissão para acessar a pagina home.</h1>
      <button onClick={voltarParaLogin}>Login</button>
    </ContentSecondary>
  );
};
