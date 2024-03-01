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
import Perfil from "./paginas/perfil/Perfil";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="min-h-[80vh]">
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
              <Route
                path="/cadastroProduto"
                element={<FormularioProduto />}
              />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route
                path="/deletarProduto/:id"
                element={<DeletarProduto />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
