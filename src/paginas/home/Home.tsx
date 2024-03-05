import './Home.css';
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import { Link } from 'react-router-dom';


function Home() { 
  return (
    <>
      <div className="flex justify-center items-center estiloDoFundo">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-2xl font-bold uppercase text-neutral-950">
              Semear o futuro da terra hoje é colher a prosperidade sustentável
              amanhã.
            </h2>
            <p className="text-green-950 text-xl uppercase">
              Conheça a loja de Oásis
            </p>

            <div className="flex justify-around gap-4">
              <div className="flex space-x-4">
                <Link to="/produtos">
                  <button className="rounded bg-lime-800 bg-opacity-50 text-white py-2 px-4 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-lime-700">
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

          <div className="flex justify-center items-center"></div>
        </div>
      </div>

      <ListaProdutos />
    </>
  );
}

export default Home;
