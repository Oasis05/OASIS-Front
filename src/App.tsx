import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import SobreNos from "./paginas/sobreNos/SobreNos";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";

import ListaCategoria from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";

import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import { ToastContainer } from "react-toastify";
import Perfil from "./paginas/perfil/Perfil";
import Contatos from "./paginas/contatos/contatos";
import { CartProvider } from './contexts/CartContext';
import Cart from './components/carrinho/cart/Cart';

function App() {
  return (
    <AuthProvider>
          <CartProvider>

      <ToastContainer />
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="min-h-[64vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobrenos" element={<SobreNos />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route
                path="/cadastroCategoria"
                element={<FormularioCategoria />}
              />
              <Route
                path="/editarCategoria/:id"
                element={<FormularioCategoria />}
              />
              <Route
                path="/deletarCategoria/:id"
                element={<DeletarCategoria />}
              />

              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

              <Route path="/contatos" element={<Contatos />} />

              <Route path="/perfil" element={<Perfil />} />

              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
      </CartProvider>

    </AuthProvider>
  );
}

export default App;