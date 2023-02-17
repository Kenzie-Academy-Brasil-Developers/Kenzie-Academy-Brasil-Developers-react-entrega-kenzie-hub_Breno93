import React from "react";
import { ButtonEntrar, ButtonCadastrar, ButtonSair } from "./style";

export const ComponentButtonEntrar = () => {
  return <ButtonEntrar type="submit">Entrar</ButtonEntrar>;
};

export const ComponentButtonCadastrar = (props) => {
  return <ButtonCadastrar {...props}>{props.children}</ButtonCadastrar>;
};

export const ComponentButtonSair = ({ onClick }) => {
  return <ButtonSair onClick={onClick}>Sair</ButtonSair>;
};
