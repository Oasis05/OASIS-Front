/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useContext, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
import { toastAlerta } from "../utils/toastAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
  resultadosPesquisa: any[];
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    tipo: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [resultadosPesquisa, setResultadosPesquisa] = useState<any[]>([]); // Inicialize resultadosPesquisa

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      toastAlerta("Usuário logado com sucesso", "sucesso");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toastAlerta("Dados do usuário inconsistentes", "erro");
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      foto: "",
      senha: "",
      tipo: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        handleLogin,
        handleLogout,
        isLoading,
        resultadosPesquisa,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
