import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toast";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState();
  const { user, setUser } = useContext(UserContext);

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
        setTechs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    UsuarioLogado();
  }, [user]);

  const reload = async () => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.get("/profile", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setTechs(response.data);
    } catch (error) {}
  };

  const createTech = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post("users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia Cadastrada com Sucesso");
      reload();
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    }
  };

  const techRemove = async (id) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia Removida com Sucesso");
      reload();
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    }
  };

  const updateTech = async (techId, data) => {
    const token = localStorage.getItem("@TOKEN");
    const newObjStatus = {
      status: data.status,
    };
    console.log(newObjStatus);
    try {
      const response = await api.put(`/users/techs/${techId}`, newObjStatus, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reload();
      toast.success("Tecnologia Atualizada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    }
  };

  return (
    <TechContext.Provider value={{ techs, createTech, techRemove, updateTech }}>
      {children}
    </TechContext.Provider>
  );
};
