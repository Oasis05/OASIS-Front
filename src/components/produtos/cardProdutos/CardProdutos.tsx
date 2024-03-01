import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
  prod: Produto;
}

function CardProduto({prod}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        <h4 className='text-lg font-semibold uppercase'>{prod.nome}</h4>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{prod.preco}</h4>
          <p>{prod.quantidade}</p>
          <p>Categoria: {prod.categoria?.tipo}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(prod.dataValidade))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${prod.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto
