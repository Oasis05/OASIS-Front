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
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform min-[767px]:w-80 w-96 transform hover:scale-105 relative min-w-sm">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://i.imgur.com/qisVhXC.jpg')`,
            opacity: 0.2,
          }}
        ></div>
        <div className="p-1 bg-lime-700"></div>
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
        
        <div>
      <button onClick={toggleOptions}>Qauntidade</button>

        <select
          aria-label="Select quantity"
          className="text-sm mb-3 absolute top-0 right-0 mt-8 bg-white rounded-lg p-2 py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
        >
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
        </select>
    </div>
      </div>
    </div>
  );
}

export default CardCart;
