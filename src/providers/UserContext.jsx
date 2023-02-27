import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const registerForm = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    }
  };

  const login = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@id", response.data.user.id);
      toast.success("Login realizado com sucesso!");
      setUser(response.data);
      console.log(user);
      navigate("/home");
    } catch (error) {
      toast.error("Ops! Algo deu errado.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/home");
        } catch (error) {
          console.log(error);
          localStorage.clear();
        }
      };
      userAutoLogin();
    }
  }, []);

  return (
    <UserContext.Provider value={{ login, registerForm, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
