import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Pinterest from "../../assets/icons/pinterest.svg";
import Twitter from "../../assets/icons/twitter.svg";
import GitHub from "../../assets/icons/github.svg";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg";

function Footer() {

  return (
    <>
      <div className="bg-gradient-to-br from-teal-50 to-lime-100 text-lime-950">
        <div className="container flex justify-between items-center py-4 px-8">
          <Link to="/home" className="text-lime-950">
            <img src={Logo} className="w-14 sm:w-14 ml-40" alt="Logo" />
          </Link>
          <div className="text-lg text-lime-950 text-center">
            Acesse nossas redes sociais
            <div className="flex gap-3">
              <img src={Instagram} className="w-9 h-9" alt="Instagram" />
              <img src={Facebook} className="w-9 h-9" alt="Facebook" />
              <img src={Twitter} className="w-9 h-9" alt="Twitter" />
              <img src={Pinterest} className="w-9 h-9" alt="Pinterest" />
              <a href="https://github.com/Oasis05" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} className="w-9 h-9" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex justify-center border-t-2 py-2">
        <p className="paragraph me-1 text-lime-950">Copyright © </p>
        <p className="paragraphBold me-1 text-lime-950">Oásis |</p>
        <p className="paragraph me-1 text-lime-950">Desenvolvido por</p>
        <p className="paragraphBold text-lime-950">
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/andersoncarlosdemoraisilva/" target="_blank" rel="noopener noreferrer"> Anderson Silva </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/fernandasasso/" target="_blank" rel="noopener noreferrer"> Fernanda Sasso </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/flavia-paiao/" target="_blank" rel="noopener noreferrer"> Flávia Paião </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/guilhermerubrae/" target="_blank" rel="noopener noreferrer"> Guilherme Rubrae </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/lauane-goncalves/" target="_blank" rel="noopener noreferrer"> Lauane Gonçalves </a> •
          <a className='hover:text-green-700' href="https://www.linkedin.com/in/isabella-albuquerqueque-/" target="_blank" rel="noopener noreferrer"> Isabella Albuquerque </a>
        </p>
      </div>
    </>
  );
  
}

export default Footer;