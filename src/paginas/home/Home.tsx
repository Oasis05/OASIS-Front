import './Home.css';
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className="flex justify-center lg:p-28 estiloDoFundo max-[600px]:bg-none lg:flex">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center md:justify-center py-4">
            <h2 className="max-[600px]:text-[15px] max-[600px]:bg-lime-900 max-[600px]:text-white max-[600px]:p-12 max-[600px]:justify-center md:text-lg lg:text-2xl xl:text-3x1 font-bold uppercase text-neutral-950 text-center">
              Semear o futuro da terra hoje é colher a prosperidade sustentável
              amanhã.
            </h2>
            <p className="text-green-950 text-xl uppercase md:text-lg max-[600px]:mt-3">
              Conheça a loja de Oásis
            </p>

            <div className="flex justify-around mr-10 gap-4">
              <div className="flex space-x-4">
                <Link to="/produtos">
                  <button className="rounded bg-lime-800 bg-opacity-50 text-white min-[320px]:ml-10 py-2 px-4 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-lime-700">
                    Produtos
                  </button>
                </Link>
                <Link to="/categorias">
                  <button className="rounded bg-lime-800 bg-opacity-50 text-white py-2 px-4 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-lime-700">
                    Categorias
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ListaProdutos />
    </>
  );
}

export default Home;
