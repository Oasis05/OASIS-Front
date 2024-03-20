import { useContext } from "react"
import { CartContext } from "../../../contexts/CartContext"
import Produto from "../../../models/Produto"
import React from "react"

interface CardProdutosProps {
    item: Produto
}

function CardCart({ item }: CardProdutosProps) {

    const { Selecionar, removerProduto } = useContext(CartContext)

    return (
        <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-lime-50'>
            <div className='py-4'>

                <img src={item.foto} className='mt-1 h-40 max-w-75 mx-auto' alt={item.nome} />

                <div className='p-4'>
                    <p className='text-sm text-center uppercase'>{item.nome}</p>
                    <h3 className='text-xl text-center font-bold uppercase'>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(item.preco)}
                    </h3>
                    <p className='text-sm text-gray-600 mb-3'>Categoria: {item.categoria?.tipo}</p>
                    <li className='flex items-center'>
              Validade: {new Intl.DateTimeFormat(undefined, {
                dateStyle: 'long',
              }).format(new Date(item.dataValidade))}
            </li>
                </div>
            </div>
            <div className="flex flex-wrap">
                <button className='w-full text-slate-100 bg-red-500 hover:bg-red-700 
                                   flex items-center justify-center py-2'
                    onClick={() => removerProduto(item.id)}>
                    Remover
                </button>
            </div>
        </div >
    )
}

export default CardCart