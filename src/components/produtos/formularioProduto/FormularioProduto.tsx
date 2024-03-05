/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { toastAlerta } from '../../../utils/toastAlerta';


function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo:'',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    dataValidade: '',
    quantidade: 0,
    foto: '',
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta("Você precisa estar logado", "info");
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/categorias');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Produto atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout()
        } else {
          toastAlerta("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar o Produto', "erro");
        }
      }
    }
  }

  const carregandoCategoria = categoria.tipo === '';

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center text-start">
      <h1 className="text-4xl font-bold text-black">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="mt-8 flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="text-black">Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="py-2 px-4 bg-lime-50 text-black rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="text-black">Valor do Produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Valor"
            name="preco"
            required
            className="py-2 px-4 bg-lime-50 text-black rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="text-black">Data de validade</label>
          <input
            value={produto.dataValidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="date"
            placeholder="Data de Validade"
            name="dataValidade"
            required
            className="py-2 px-4 bg-lime-50 text-black rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="text-black">Estoque do produto</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Estoque"
            name="quantidade"
            required
            className="py-2 px-4 bg-lime-50 text-black rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo" className="text-black">Foto do produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="link"
            placeholder="Foto"
            name="foto"
            required
            className="py-2 px-4 bg-lime-50 text-black rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-black">Categoria do produto</p>
          <select name="categoria" id="categoria" className='py-2 px-4 bg-lime-50 text-black rounded-md focus:outline-none' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.tipo}</option>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='mt-4 bg-lime-800 py-2 px-4 text-white rounded-md hover:bg-lime-700 focus:outline-none'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;