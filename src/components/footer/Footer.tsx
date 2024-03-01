import { FacebookLogo, InstagramLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {



  return (
    <>
      <div className="flex justify-center bg-gradient-to-br from-teal-950 to-lime-100 text-yellow-950">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Oasis | Copyright: </p>
          <p className='text-lg'>Acesse nossas redes sociais</p>
          <div className='flex gap-2'>
            <a href="https://github.com/Oasis05" target="_blank">
              <GithubLogo size={48} weight='bold' />
            </a>
            <InstagramLogo size={48} weight='bold' />
            <FacebookLogo size={48} weight='bold' />
          </div>
        </div>
      </div>

      <div className="flex justify-center border-t-2 py-2 ">
        <p className="paragraph me-1">Copyright © </p>
        <p className="paragraphBold me-1">Oásis |</p>
        <p className="paragraph me-1">Desenvolvido por</p>
        <p className="paragraphBold">
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/andersoncarlosdemoraisilva/" target="_blank"> Anderson Silva </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/fernandasasso/" target="_blank"> Fernanda Sasso </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/flavia-paiao/" target="_blank"> Flávia Paião </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/guilhermerubrae/" target="_blank"> Guilherme Rubrae </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/lauane-goncalves/" target="_blank"> Lauane Gonçalves </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/isabella-albuquerqueque-/" target="_blank"> Isabella Albuquerque </a>
        </p>


      </div>
    </>
  )
}

export default Footer