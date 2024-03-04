import { useState } from "react";
import { Link } from "react-router-dom";
import Produto from '../../../models/Produto';

interface CardProdutoProps {
  prod: Produto;
}

function CardProduto({ prod }: CardProdutoProps) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 relative uppercase'>
      <div
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{
          backgroundImage: `url('https://imgur.com/aNuccNU.jpg')`, // URL da imagem de fundo
          opacity: 0.5, // Opacidade ajustada para 50%
        }}
      ></div>
      <div className='p-1 bg-lime-200'></div>
      <div className='p-8 relative z-10'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>{prod.nome}</h2>
        <p className='text-gray-600 mb-6'>Tipo: {prod.categoria?.tipo}</p>
        <p className='text-2xl font-bold text-gray-800 mb-6'>Preço {prod.preco}</p>
        <img src={prod.foto} alt={prod.nome} className="w-full h-auto mb-4" />
        <ul className='text-sm text-gray-600 mb-6'>
          <li className='mb-2 flex items-center'>
            Quantidade: {prod.quantidade}
          </li>
          <li className='mb-2 flex items-center'>
            {prod.categoria?.tipo}
          </li>
          <li className='flex items-center'>
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(prod.dataValidade))}
          </li>
        </ul>
        {showOptions && (
          <ul className="text-sm text-gray-600 mb-6 absolute top-0 right-0 mt-10 bg-white border border-gray-200 rounded-lg p-2">
            <li>
              <Link
                to={`/editarCategoria/${prod.id}`}
                className="text-gray-800 hover:text-gray-600 block py-2"
              >
                Editar
              </Link>
            </li>
            <li>
              <Link
                to={`/deletarCategoria/${prod.id}`}
                className="text-red-600 hover:text-red-400 block py-2"
              >
                Deletar
              </Link>
            </li>
          </ul>
        )}
        <button
          onClick={toggleOptions}
          className="absolute top-0 right-0 mt-2 mr-2 p-2 focus:outline-none z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800 hover:text-gray-600"
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
      </div>
    </div>
  );
}

export default CardProduto;
