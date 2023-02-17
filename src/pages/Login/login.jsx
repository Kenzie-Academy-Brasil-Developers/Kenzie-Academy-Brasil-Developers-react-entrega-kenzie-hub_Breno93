import React from "react";
import { api } from "../../services/api";
import styled from "styled-components";
import logo from "../../assets/Logo.png";

import {
  ComponentButtonCadastrar,
  ComponentButtonEntrar,
} from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Register } from "../Register/register";
import { Link, useNavigate } from "react-router-dom";

import { ContainerLogin, FormLogin, FormContent, LogoImg } from "./style";
import { Input } from "../../components/Input";

import { toast } from "react-toast";

const schema = yup.object({
  email: yup.string().required("Email obrigatório").email("O email é inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const login = async (data) => {
    console.log(data);
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@id", response.data.user.id);
      console.log(response.data);
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
      console.error(error);
    }
  };

  return (
    <ContainerLogin>
      <FormLogin onSubmit={handleSubmit(login)}>
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
