import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        alert("Usuário cadastrado com sucesso");
      } catch (error) {
        alert("Erro ao cadastrar o Usuário");
      }
    } else {
      alert("Dados inconsistentes. Verifique as informações de cadastro.");
      setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha(""); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div
        className="flex h-screen w-full items-center justify-center bg-yellow-950 bg-cover bg-no-repeat"
        style={{ background: "white" }}
      >
        {" "}
        <div className="pt-10 pb-10 rounded-xl bg-lime-200 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8" style={{ maxWidth: '36rem', width: '100%' }}>
          <div className="text-green-900">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://i.imgur.com/mX9nNuC.png"
                width="100"
                alt=""
                srcSet=""
              />
              <h1 className="mb-2 text-2xl font-bold"></h1>
              <span className="text-yellow-950">Cadastre-se</span>
            </div>
            <form onSubmit={cadastrarNovoUsuario}>
              <div className="flex justify-center mb-4 text-lg">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  className="rounded-3xl border-none bg-lime-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={usuario.nome}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="flex justify-center mb-4 text-lg">
                <input
                  type="text"
                  name="usuario"
                  placeholder="Usuário"
                  className="rounded-3xl border-none bg-lime-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={usuario.usuario}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="flex justify-center mb-4 text-lg">
                <input
                  type="text"
                  name="foto"
                  placeholder="Foto"
                  className="rounded-3xl border-none bg-lime-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={usuario.foto}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="flex justify-center mb-4 text-lg">
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  className="rounded-3xl border-none bg-lime-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={usuario.senha}
                  onChange={atualizarEstado}
                />
              </div>
              <div className="flex justify-center mb-4 text-lg">
                <input
                  type="password"
                  name="confirmarSenha"
                  placeholder="Confirmar Senha"
                  className="rounded-3xl border-none bg-lime-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={confirmaSenha}
                  onChange={handleConfirmarSenha}
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-lime-800 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-700"
                >
                  Cadastrar
                </button>
              </div>
            </form>
            <hr className="mt-4 w-full" />
            <p className="mt-2 text-center text-yellow-950">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-green-950 hover:text-yellow-600"
              >
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
