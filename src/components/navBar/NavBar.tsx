import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-teal-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Oasis</div>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Sobre nós</div>
              <Link to='/login' className='hover:underline'>Login</Link>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar