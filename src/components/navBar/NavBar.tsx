import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo.svg";

function Navbar() {
 
  

  return (
    <>
     <header className='bg-lime-50 text-yellow-950 w-full text-green flex justify-between align-middle py-[1rem] px-[4rem] '>
        <Link to="/home">
          <img src={Logo} className="xl:w-15 sm:w-14"></img>
        </Link>

            <div className="text-darkMossGreen p-4 grid gap-7 grid-flow-col items-center font-bold text-[13.5px] ]">
              <Link to='/home' className='hover:text-lime-700 uppercase'>Home</Link>
              <div className='hover:text-lime-700 uppercase'>Produtos</div>
              <Link to='/sobreNos' className='hover:text-lime-700 uppercase'>Sobre Nós</Link>
              <Link to='/login' className='hover:text-lime-700 uppercase'>Login</Link>
              <div className='hover:text-lime-700 uppercase'>Sair</div>
      </div>
    </header>
    </>
  )
}

export default Navbar