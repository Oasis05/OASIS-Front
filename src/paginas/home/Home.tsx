import './Home.css';
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import ModalProdutos from "../../components/produtos/modalProdutos/ModalProdutos";


function Home() { 

  return (
    <>
      <div className="flex justify-center items-center estiloDoFundo">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
            <p className="text-xl">Compre aqui</p>

            <div className="flex justify-around gap-4">
              <ModalProdutos/>
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver produtos
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListaProdutos/>
    </>
  );
}

export default Home;
