import React from "react";
import logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";

import { 
  BuscarInputConteiner,
  ConteinerHeader,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper 
} from "./styles";
import { Button } from "../Button";

const Header = ({ autenticado }) => {

   const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Redireciona para a página de cadastro
  };


  return (
    <Wrapper>
      <ConteinerHeader>
        <Row>
          <img src={logo} alt="logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputConteiner>
                <Input placeholder="Buscar..." />
              </BuscarInputConteiner>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/61653883?s=400&u=64a5bde72ffbe2da0bf852998eb064029c73b9d5&v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Enter" onClick={handleLoginClick}/>
              <Button title="Cadastrar" onClick={handleSignUpClick}/>
            </>
          )}
        </Row>
      </ConteinerHeader>
    </Wrapper>
  );
}

export { Header };
