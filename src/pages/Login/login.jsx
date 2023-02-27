import React, { useContext } from "react";
import logo from "../../assets/Logo.png";
import { ComponentButtonEntrar } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ContainerLogin, FormLogin, FormContent, LogoImg } from "./style";
import { Input } from "../../components/Input";
import { UserContext } from "../../providers/UserContext";

const schema = yup.object({
  email: yup.string().required("Email obrigatório").email("O email é inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const Login = () => {
  const { login } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    await login(data);
  };

  return (
    <ContainerLogin>
      <FormLogin onSubmit={handleSubmit(handleLogin)}>
        <LogoImg src={logo} alt="Logo Kenzie" />
        <FormContent>
          <h2>Login</h2>

          <Input
            label="Email"
            type="text"
            placeholder="Digite o seu nome"
            register={register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            register={register("password")}
            error={errors.password?.message}
          />

          <ComponentButtonEntrar />

          <p>Ainda não possui conta?</p>

          <Link to={"/register"}>Cadastre-se</Link>
        </FormContent>
      </FormLogin>
    </ContainerLogin>
  );
};
