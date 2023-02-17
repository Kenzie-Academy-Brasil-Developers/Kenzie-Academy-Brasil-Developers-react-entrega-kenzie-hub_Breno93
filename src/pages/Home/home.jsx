import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  BodyHome,
  HeaderHome,
  SectionTecnologias,
  SectionUserModule,
} from "./style";
import { ComponentButtonSair } from "../../components/Button";

export const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    const UsuarioLogado = async () => {
      console.log();
      try {
        const response = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    UsuarioLogado();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <HeaderHome>
        <img src={logo} alt="" />
        <ComponentButtonSair onClick={logout} />
      </HeaderHome>
      <BodyHome />
      <SectionUserModule>
        <p>Olá {user?.name}</p>
        <span>{user?.course_module}</span>
      </SectionUserModule>
      <BodyHome />
      <SectionTecnologias></SectionTecnologias>
    </>
  );
};
