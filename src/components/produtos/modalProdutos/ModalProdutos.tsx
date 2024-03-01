//import React from 'react';
import FormularioProduto from '../formularioProduto/FormularioProduto';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProdutos.css'

function ModalProdutos() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
        <div>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProdutos;
