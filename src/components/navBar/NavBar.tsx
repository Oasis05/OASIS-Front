import { useState, useContext, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Menu, Transition } from "@headlessui/react";
import { toastAlerta } from "../../utils/toastAlerta";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logo.svg";
import User from "../../assets/icons/usericon.svg";
import Carrinho from "../../assets/icons/carrinho.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import { CaretDown, SignIn, SignOut, UserSquare } from "@phosphor-icons/react";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  const handlePesquisa = () => {
    if (termoPesquisa) {
      navigate(`/produto/nomes/${termoPesquisa}`);
    }
  };

  let userDropDown;

  if (usuario.token !== "") {
    userDropDown = (
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            <Link
              to="/perfil"
              className="flex px-4 py-2 text-sm bg-zinc-100 text-darkMossGreen hover:bg-lime-50
													rounded-md transition duration-300 ease-in-out"
            >
              <UserSquare
                size={16}
                className="-mr-1 self-center text-gray-400 flex"
              />
              <p className="px-2" onClick={handleMenuClick}>Meu Perfil</p>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/login"
              onClick={logout}
              className="flex px-4 py-2 text-sm  bg-zinc-100 text-darkMossGreen hover:bg-lime-50
													rounded-md transition duration-300 ease-in-out"
            >
              <SignOut
                size={16}
                className="-mr-1 self-center text-gray-400 flex"
              />
              <p className="px-2" onClick={handleMenuClick}>Sair</p>
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    );
  } else {
    userDropDown = (
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          <Menu.Item>
            <Link
              to="/login"
              className="flex px-4 py-2 text-sm bg-zinc-100  text-darkMossGreen hover:bg-lime-50
													rounded-md transition duration-300 ease-in-out" onClick={handleMenuClick}
            >
              <SignIn
                size={16}
                className="-mr-1 self-center text-gray-500 flex"
              />
              <p className="px-2">Entrar</p>
            </Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    );
  }

  return (
    <header className="bg-gradient-to-br from-teal-50 to-lime-100 text-lime-950 w-full text-green flex justify-between items-center py-[0.3rem] px-[4rem]">
      <Link to="/home">
        <img
          src={Logo}
          className="w-[70px] max-[767px]:w-24 max-[767px]:my-2 max-[600px]:ml-[-40px]"
          alt="Logo"
        />
      </Link>

      <div className="div-focus flex min-[768px]:ml-16 p-[5px] min-[320px]:mr-10 rounded-full self-center border border-emerald input-pesquisa items-center bg-lime-50">
        <input
          type="text"
          placeholder="Pesquisar"
          name="descricao"
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          className="w-[20vw] max-[767px]:w-[25vw] h-[10px] border-none max-[767px]:mr-6 rounded-full p-3 self-center input-pesquisa bg-transparent text-black focus:outline-none"
        />
        <button
          onClick={handlePesquisa}
          className="group bg-emerald rounded-full w-7 h-7 flex justify-center"
        >
          <img className="w-4 self-center" src={SearchIcon} alt="Search" />
        </button>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-7 h-7 absolute min-[320px]:mt-1 right-8 top-6 cursor-pointer md:hidden"
      >
        {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
      </div>

      <div
        className={`p-4 grid mb-12 gap-7 md:grid-flow-col font-bold text-[14px] md:pb-0 pb-1 min-[768px]:pt-6 min-[320px]:absolute md:static max-[767px]:bg-[#EDFCD9] max-[767px]:mt-9 mt-5 min-[320px]:items-center left-0 w-full md:w-auto transition-all duration-500 ease-in ${isOpen ? "top-12" : "top-[-490px]"
          } z-50`}
      >
        <Link to="/home" className="hover:text-lime-900 uppercase" onClick={handleMenuClick}>
          Home
        </Link>
        <Link to="/sobreNos" className="hover:text-lime-900 uppercase" onClick={handleMenuClick}>
          Sobre Nós
        </Link>
        <Menu as="div" className="relative inline-block">
          <div className="flex group">
            <Menu.Button className="transition duration-300 ease-in-out group-hover:text-sunglow inline-flex w-full uppercase">
              Produtos
              <CaretDown
                size={10}
                className="ms-1 self-center text-darkMossGreen flex transition duration-300 ease-in-out group-hover:text-sunglow"
                weight="bold"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute inset-x-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-seasalt shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-neutral-50">
              <div className="px-1 py-1">
                <Menu.Item>
                  <Link
                    to={`/produtos`}
                    className="block px-4 py-2 text-[12px]  bg-seasalt text-darkMossGreen bg-lime-50  hover:bg-lime-200
                      rounded-md transition duration-300 ease-in-out" onClick={handleMenuClick}
                  >
                    Todos os Produtos
                  </Link>
                </Menu.Item>
                {usuario.tipo === "1" && (
                  <Menu.Item>
                    <Link
                      to={`/cadastroProduto`}
                      className="block px-4 py-2 text-[12px]  bg-seasalt text-darkMossGreen bg-lime-50  hover:bg-lime-200
              rounded-md transition duration-300 ease-in-out" onClick={handleMenuClick}
                    >
                      Cadastrar Produto
                    </Link>
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block">
          <div className="flex group">
            <Menu.Button className="transition duration-300 ease-in-out group-hover:text-sunglow inline-flex w-full uppercase">
              Categorias
              <CaretDown
                size={10}
                className="ms-1 self-center text-darkMossGreen flex transition duration-300 ease-in-out group-hover:text-sunglow"
                weight="bold"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute inset-x-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-seasalt shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-neutral-50">
              <div className="px-1 py-1">
                <Menu.Item>
                  <Link
                    to={`/categorias`}
                    className="block px-4 py-2 text-[12px] bg-seasalt text-darkMossGreen hover:bg-lime-200 rounded-md transition duration-200 ease-in-out" onClick={handleMenuClick}
                  >
                    Todas as Categorias
                  </Link>
                </Menu.Item>
                {usuario.tipo === "1" && (
                  <Menu.Item>
                    <Link
                      to={`/cadastroCategoria`}
                      className="block px-4 py-2 text-[12px] bg-seasalt text-darkMossGreen hover:bg-lime-200 rounded-md transition duration-200 ease-in-out" onClick={handleMenuClick}
                    >
                      Cadastrar Categoria
                    </Link>
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link to="/contatos" className="hover:text-lime-900 uppercase" onClick={handleMenuClick}>
          Contatos
        </Link>

        <div className="gap-3 justify-around flex items-center max-[767px]:pb-3 max-[767px]:mt-[-15px]">
          <div className="flex rounded-[12rem] items-center border border-emerald p-[6px] bg-lime-50">
            <Menu as="div" className="relative inline-block text-darkMossGreen">
              <div className="flex group whitespace-nowrap">
              <Link to='/cart'><img
                    src={Carrinho}
                    className="w-6 ml-2"
                    alt="User Icon"
                  ></img>
                  <p className="flex headerBtn ps-2 pe-2 items-center self-center">
                    Carrinho
                  </p></Link>
              </div>
            </Menu>
          </div>
        </div>

        <div className="gap-3 justify-around flex items-center">
          <div className="flex rounded-[12rem] items-center border border-emerald p-[5px]  bg-lime-50">
            <Menu as="div" className="relative inline-block text-darkMossGreen">
              <div className="flex group">
                <Menu.Button className="transition duration-300 ease-in-out group-hover:text-sunglow inline-flex w-full">
                  <img src={User} className="w-6 ml-2" alt="User Icon"></img>
                  <p className="flex headerBtn ps-2 pe-2 items-center self-center">
                    Perfil
                  </p>
                  <CaretDown
                    size={10}
                    className="me-2 self-center text-darkMossGreen text-[12px] transition duration-300 ease-in-out group-hover:text-sunglow"
                    weight="bold"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                {userDropDown}
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;