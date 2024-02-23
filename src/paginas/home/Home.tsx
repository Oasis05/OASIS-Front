import './Home.css';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext';

function Home() {
  useContext(UserContext);
  const estiloDoFundo = {
    backgroundImage: `url('https://i.imgur.com/xvzLDxo.jpg')`,
    backgroundSize: '100%',
    height: 400
  };

  return (
    <>
      <div className="flex justify-center items-center" style={estiloDoFundo}>
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Compre aqui</p>

            <div className="flex justify-around gap-4">
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
            </div>
          </div>


        </div>

      </div>

    </>
  );
}

export default Home;
