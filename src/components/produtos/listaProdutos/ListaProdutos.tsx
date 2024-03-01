import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProdutos/CardProdutos';
import { toastAlerta } from '../../../utils/toastAlerta';
import { ThreeDots } from 'react-loader-spinner';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta("Você precisa estar logado", "info");
      navigate('/');
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <>
      {produtos.length === 0 && (
        <ThreeDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="ThreeDots-wrapper flex justify-center mx-auto"
        />)}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produtos) => (
          <CardProduto key={produtos.id} prod={produtos} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;