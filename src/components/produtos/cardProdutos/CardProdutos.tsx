import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Produto from '../../../models/Produto';
import { AuthContext } from "../../../contexts/AuthContext";

interface CardProdutoProps {
  prod: Produto;
}

function CardProduto({ prod }: CardProdutoProps) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const {usuario} = useContext(AuthContext);

  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 relative max-w-sm'>
      <div
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{
          backgroundImage: `url('https://i.imgur.com/qisVhXC.jpg')`, 
          opacity: 0.2, 
        }}
      ></div>
      <div className='p-1 bg-lime-900'></div>
      <div className='p-6 relative z-10  flex flex-col justify-center items-center'>
        <h2 className='text-lg font-bold text-gray-800 mb-3'>{prod.nome}</h2>
        <p className='text-sm text-gray-600 mb-3'>Tipo: {prod.categoria?.tipo}</p>
        <p className='text-lg font-bold text-gray-800 mb-3'>Preço: {prod.preco}</p>
        <img src={prod.foto} alt={prod.nome} className="w-32 h-auto mb-3" />
        <ul className='text-sm text-gray-600 mb-3'>
          <li className='mb-1 flex items-center'>
            Quantidade: {prod.quantidade}
          </li>
          <li className='flex items-center'>
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'long',
            }).format(new Date(prod.dataValidade))}
          </li>
        </ul>
        <div className="p-3">
          <button
            className="w-full bg-lime-800 text-white rounded-full px-3 py-2 hover:bg-lime-600 focus:outline-none focus:shadow-outline-purple"
          >
            Selecionar
          </button>
        </div>
        {showOptions && (
          <ul className="text-sm text-gray-600 mb-3 absolute top-0 right-0 mt-8 bg-white border border-gray-200 rounded-lg p-2">
            <li>
              <Link
                to={`/editarProduto/${prod.id}`}
                className="text-lime-900 hover:text-lime-700 block py-1 px-2"
              >
                Editar
              </Link>
            </li>
            <li>
              <Link
                to={`/deletarProduto/${prod.id}`}
                className="text-red-600 hover:text-red-400 block py-1 px-2"
              >
                Deletar
              </Link>
            </li>
          </ul>
        )}
        
        {usuario.tipo === "1" ? 
        <button
          onClick={toggleOptions}
          className="absolute top-0 right-0 mt-3 mr-3 p-2 focus:outline-none z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-800 hover:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
          :       
        <div></div>
        }
      </div>
    </div>
  );
}

export default CardProduto;
