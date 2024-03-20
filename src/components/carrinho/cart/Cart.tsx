import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../../carrinho/cardCart/CardCart";
import React from "react";

function Cart() {

    const navigate = useNavigate();
    
    const { items, limparCart } = useContext(CartContext)
    
    return (
        <div className="
                bg-white 
                flex 
                flex-col
                justify-center
                mt-4
                mb-4
                w-full md:w-1/3 p-4"
                >

            <h1 className="text-xl font-bold mt-8 my-4 uppercase text-yellow-950 max-[767px]:flex-wrap max-[767px]:flex max-[767px]:text-center">
                Carrinho de Compras
            </h1>
            <h2 className="text-2xl text-center my-4">
                { items.length === 0 ? 'O Carrinho está vazio!' : ''}
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    items.map(produto => (
                        <CardCart key={produto.id} item={produto} />
                    ))
                }
            </div>

            <button className="rounded text-lime-800 bg-lime-600 
          hover:bg-slate-800 w-1/4 py-2 mx-auto flex justify-center"
                type="submit" 
                disabled={items.length === 0 ? true : false}
                onClick={limparCart}>
                Finalizar Compra
            </button>
        </div>
    )
}

export default Cart