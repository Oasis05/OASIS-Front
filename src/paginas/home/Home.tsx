import './Home.css';
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import ModalProdutos from "../../components/produtos/modalProdutos/ModalProdutos";


function Home() { 

  return (
    <>
      <div className="flex justify-center items-center estiloDoFundo">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-2xl font-bold uppercase'>Semear o futuro da terra hoje é colher a prosperidade sustentável amanhã. Cultivemos o presente com respeito à natureza, para garantir um legado verde e abundante para as gerações futuras.</h2>
              <p className='text-xl'>Compre aqui</p>

            <div className="flex justify-around gap-4">
              <ModalProdutos/>
              <button className="rounded bg-white text-blue-800 py-2 px-4">
                Ver produtos
              </button>
            <div className="flex space-x-4">
  <button className="rounded bg-lime-800 bg-opacity-50 text-white py-2 px-4 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-lime-700">
    Produtos
  </button>
  <button className="rounded bg-lime-800 bg-opacity-50 text-white py-2 px-4 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-lime-700">
    Categorias
  </button>
</div>
            </div>
          </div>
        </div>
      </div>
      <ListaProdutos/>
    </>
  );
}

export default Home;
