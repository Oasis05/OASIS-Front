import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import React from "react";

interface CardProdutosProps {
  item: Produto;
}

function CardCart({ item }: CardProdutosProps) {
  const { removerProduto } = useContext(CartContext);

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const { usuario } = useContext(AuthContext);

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform max-[767px]:w-80 w-96 transform hover:scale-105 relative max-w-sm">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://i.imgur.com/qisVhXC.jpg')`,
            opacity: 0.2,
          }}
        ></div>
        <div className="p-1 bg-lime-900"></div>
        <div className="p-6 relative z-10  flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">{item.nome}</h2>
          <p className="text-sm text-gray-600 mb-3">
            Categoria: {item.categoria?.tipo}
          </p>
          <p className="text-lg font-bold text-gray-800 mb-3">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.preco)}
          </p>{" "}
          <img src={item.foto} alt={item.nome} className="w-32 h-auto mb-3" />
          <ul className="text-sm text-gray-600 mb-3">
            <li className="flex items-center">
              Validade:{" "}
              {new Intl.DateTimeFormat(undefined, {
                dateStyle: "long",
              }).format(new Date(item.dataValidade))}
            </li>
          </ul>
          <div className="p-3">
            <button
              className="w-full bg-red-500 text-white rounded-full px-3 py-2
                           hover:bg-red-700 flex items-center focus:outline-none focus:shadow-outline-lime
                           justify-center py-2"
              onClick={() => removerProduto && removerProduto(item.id)}
            >
              Remover
            </button>
          </div>
        </div>
        {showOptions && (
          <ul className="text-sm text-gray-600 mb-3 absolute top-0 right-0 mt-8 bg-white border border-gray-200 rounded-lg p-2">
            <li>01</li>
            <li>02</li>
            <li>03</li>
            <li>04</li>
          </ul>
        )}

        {usuario.tipo === "1" ? (
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
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default CardCart;
