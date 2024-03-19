/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produto/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', "info")
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta("Você precisa estar logado", "info");
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta("Produto apagado com sucesso", "sucesso");

    } catch (error) {
      toastAlerta("Erro ao apagar o produto", "erro");
    }

    retornar()
  }
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-black">Deletar Produto</h1>

      <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar esse produto?</p>

      <div className="flex">
        <button className="text-white bg-red-600 hover:bg-red-700 w-full py-2 px-4 mr-2 rounded-md focus:outline-none" onClick={retornar}>
          Não
        </button>
        <button className="text-white bg-lime-900 hover:bg-lime-700 w-full py-2 px-4 rounded-md focus:outline-none" onClick={deletarProduto}>
          Sim
        </button>
      </div>
    </div>
  );
}

export default DeletarProduto;