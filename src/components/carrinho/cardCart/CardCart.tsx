import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Produto from "../../../models/Produto";
import React from "react";

interface CardProdutosProps {
    item: Produto;
}

function CardCart({ item }: CardProdutosProps) {
    const { removerProduto } = useContext(CartContext);

    return (
        <div className='flex justify-center'>
      <div className='bg-white rounded-lg overflow-hidden shadow-md transition-transform max-[767px]:w-80 w-96 transform hover:scale-105 relative max-w-sm'>
        <div
          className='absolute inset-0 bg-cover bg-center z-0'
          style={{
            backgroundImage: `url('https://i.imgur.com/qisVhXC.jpg')`,
            opacity: 0.2,
          }}
        ></div>
                        <div className='p-1 bg-lime-900'></div>
                        <div className='p-6 relative z-10  flex flex-col justify-center items-center'>
                            <img src={item.foto} alt={item.nome} className="w-32 h-auto mb-3" />
                            <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
              </select>
                            <h2 className='text-lg font-bold text-gray-800 mb-3'>{item.nome}</h2>
                            <p className='text-sm text-gray-600 mb-3'>Categoria: {item.categoria?.tipo}</p>
                            <p className='text-lg font-bold text-gray-800 mb-3'>{Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(item.preco)}</p>
                            <ul className='text-sm text-gray-600 mb-3'>
                                <li className='flex items-center'>
                                    Validade: {item.dataValidade && new Intl.DateTimeFormat(undefined, {
                                        dateStyle: 'long',
                                    }).format(new Date(item.dataValidade))}
                                </li>
                            </ul>
                            <div className="p-3">
                                <div className="flex flex-wrap">
                                    <button
                                        className='w-full bg-red-800 text-white rounded-full px-3 py-2
                                        hover:bg-red-600 flex items-center focus:outline-none focus:shadow-outline-lime
                                        justify-center py-2'
                                        onClick={() => removerProduto && removerProduto(item.id)}>
                                        Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCart;
