import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-teal-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Oasis</div>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:text-teal-900'>Home</Link>
              <div className='hover:text-teal-900'>Produtos</div>
              <Link to='/sobreNos' className='hover:text-teal-900'>Sobre Nós</Link>
              <Link to='/login' className='hover:text-teal-900'>Login</Link>
              <div className='hover:text-teal-900'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar