import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { ComponentButtonCadastrar } from "../Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SelectRegister } from "../SelectRegister";
import {
  ContainerRegister,
  FormContent,
  FormRegister,
  ImgLogo,
  DivHeader,
} from "./style";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";
import { UserContext } from "../../providers/UserContext";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),

  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email digitado é inválido"),

  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha")
    .required(),

  bio: yup.string().required("Campo obrigatório"),

  contact: yup.string().required("Campo obrigatório"),
});

export const RegisterForm = () => {
  const { registerForm } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ContainerRegister>
      <FormRegister onSubmit={handleSubmit(registerForm)}>
        <DivHeader>
          <ImgLogo src={logo} alt="" />
          <Link to={"/"}>Voltar</Link>
        </DivHeader>
        <FormContent>
          <h3>Crie sua conta</h3>
          <p>Rapido e grátis, vamos nessa</p>

          <Input
            label="Nome"
            type="text"
            placeholder="Digite o seu nome"
            register={register("name")}
            error={errors.name?.message}
          />

          <Input
            label="Email"
            type="text"
            placeholder="Digite o seu email"
            register={register("email")}
            error={errors.email?.message}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite a sua senha"
            register={register("password")}
            error={errors.password?.message}
          />

          <Input
            label="Confirmação de Senha"
            type="password"
            placeholder="Confirme sua senha"
            register={register("passwordConfirm")}
            error={errors.passwordConfirm?.message}
          />

          <Input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            register={register("bio")}
            error={errors.bio?.message}
          />

          <Input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            register={register("contact")}
            error={errors.contato?.message}
          />

          <SelectRegister register={register("course_module")} />
          <div style={{ width: 324 }}>
            <ComponentButtonCadastrar type="submit">
              Cadastrar
            </ComponentButtonCadastrar>
          </div>
        </FormContent>
      </FormRegister>
    </ContainerRegister>
  );
};
