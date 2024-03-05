import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Pinterest from "../../assets/icons/pinterest.svg";
import Twitter from "../../assets/icons/twitter.svg";
import GitHub from "../../assets/icons/github.svg";


function Footer() {



  return (
    <>
      <div className="flex justify-center text-lime-950" style={{ backgroundColor: 'rgba(33, 59, 28, 0.71)'}}>
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Oasis | Copyright: </p>
          <p className='text-lg'>Acesse nossas redes sociais</p>
          <div className="flex justify-center gap-3 ">
            <img src={Instagram} className="w-9 h-9"></img>
            <img src={Facebook} className="w-9 h-9"></img>
            <img src={Twitter} className="w-9 h-9"></img>
            <img src={Pinterest} className="w-9 h-9"></img>
            <a href="https://github.com/Oasis05" target="_blank"><img src={GitHub} className="w-9 h-9"></img></a>
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