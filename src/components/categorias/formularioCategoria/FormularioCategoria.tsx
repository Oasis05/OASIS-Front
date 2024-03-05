/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";


function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta("Categoria atualizada com sucesso", "sucesso");
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', "info" )
          handleLogout()
        } else {
          toastAlerta("Erro ao atualizar a Categoria", "erro");
        }

      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta("Categoria cadastrada com sucesso", "sucesso");

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout()
        } else {
          toastAlerta("Erro ao cadastrar a Categoria", "erro");
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta("Você precisa estar logado", "info");
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-start my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>
  
      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-black">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Tipo"
            name='tipo'
            className="py-2 px-4 bg-lime-50 text-black rounded-md focus:outline-none"
            value={categoria.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="mt-4 bg-lime-800 py-2 px-4 text-white rounded-md hover:bg-lime-700 focus:outline-none"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );  
}

export default FormularioCategoria;

