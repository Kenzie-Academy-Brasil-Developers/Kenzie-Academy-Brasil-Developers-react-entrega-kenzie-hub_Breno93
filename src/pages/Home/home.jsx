import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  BodyHome,
  DivTitleTecnologias,
  DivUl,
  HeaderHome,
  SectionTecnologias,
  SectionUserModule,
} from "./style";
import { ComponentButtonSair } from "../../components/Button";
import { ModalTecnologias } from "../../components/Modal";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";

export const Home = () => {
  // const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const { techs } = useContext(TechContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEditTech = (tech) => {
    setOpenModal(true);
    setSelectedTech(tech);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTech(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    console.log(techs);
    const UsuarioLogado = async () => {
      console.log();
      try {
        const response = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
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
      {openModal ? (
        <ModalTecnologias
          selectedTech={selectedTech}
          onClose={handleCloseModal}
        />
      ) : null}
      <SectionTecnologias>
        <DivTitleTecnologias>
          <h2>Tecnologias</h2>
          <button onClick={() => setOpenModal(true)}>+</button>
        </DivTitleTecnologias>
        <DivUl>
          {techs &&
            techs.techs.map((tech) => (
              <li onClick={() => handleEditTech(tech)}>
                <p>{tech.title}</p>
                <p>{tech.status}</p>
              </li>
            ))}
        </DivUl>
      </SectionTecnologias>
    </>
  );
};
