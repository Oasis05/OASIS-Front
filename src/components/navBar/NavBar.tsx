import { useEffect, useState } from "react";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../../contexts/AuthContext";
import User from "../../assets/icons/usericon.svg";
import { CaretDown, SignIn, SignOut, UserSquare } from "@phosphor-icons/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { buscar } from "../../services/Service";
import Categoria from "../../models/Categoria";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await buscar("/categorias/all", setCategorias, {
      headers: {},
    });
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handlePesquisa = () => {
    if (termoPesquisa) {
      navigate(`/produtos/nomes/${termoPesquisa}`);
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
              className="flex px-4 py-2 text-sm bg-zinc-100 text-darkMossGreen hover:bg-green-100
													rounded-md transition duration-300 ease-in-out"
            >
              <UserSquare
                size={16}
                className="-mr-1 self-center text-gray-400 flex"
              />
              <p className="px-2">Meu Perfil</p>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/login"
              onClick={logout}
              className="flex px-4 py-2 text-sm  bg-zinc-100 text-darkMossGreen hover:bg-green-100
													rounded-md transition duration-300 ease-in-out"
            >
              <SignOut
                size={16}
                className="-mr-1 self-center text-gray-400 flex"
              />
              <p className="px-2">Sair</p>
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
              className="flex px-4 py-2 text-sm bg-zinc-100  text-darkMossGreen hover:bg-green-100
													rounded-md transition duration-300 ease-in-out"
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
    <header
      className=" text-lime-950 w-full text-green flex justify-between items-center py-[0.3rem] px-[4rem]"
      style={{ backgroundColor: "rgba(178, 205, 172, 0.71)" }}
    >
      <Link to="/home">
        <img src={Logo} className="xl:w-15 sm:w-14" alt="Logo" />
      </Link>

      <div className="div-focus flex p-[5px] rounded-full self-center border border-emerald input-pesquisa items-center bg-lime-50">
        <input
          type="text"
          placeholder="Pesquisar"
          name="descricao"
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          className="w-[16vw] h-[10px] border-none rounded-full p-3 self-center input-pesquisa bg-transparent text-black"
        />
        <button
          onClick={handlePesquisa}
          className="group bg-emerald rounded-full w-7 h-7 flex justify-center"
        >
          <img className="w-4 self-center" src={SearchIcon} alt="Search" />
        </button>
      </div>

      <div className="p-4 grid gap-7 grid-flow-col items-center font-bold text-[13.5px]">
        <Link to="/home" className="hover:text-lime-900 uppercase">
          Home
        </Link>
        <Link to="/sobreNos" className="hover:text-lime-900 uppercase">
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
            rounded-md transition duration-300 ease-in-out"
                  >
                    Todos os Produtos
                  </Link>
                </Menu.Item>
                {usuario.tipo === "1" && (
                  <Menu.Item>
                    <Link
                      to={`/cadastroProduto`}
                      className="block px-4 py-2 text-[12px]  bg-seasalt text-darkMossGreen bg-lime-50  hover:bg-lime-200
              rounded-md transition duration-300 ease-in-out"
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
                    className="block px-4 py-2 text-[12px] bg-seasalt text-darkMossGreen hover:bg-lime-200 rounded-md transition duration-200 ease-in-out"
                  >
                    Todas as Categorias
                  </Link>
                </Menu.Item>
                {usuario.tipo === "1" && (
                  <Menu.Item>
                    <Link
                      to={`/cadastroCategoria`}
                      className="block px-4 py-2 text-[12px] bg-seasalt text-darkMossGreen hover:bg-lime-200 rounded-md transition duration-200 ease-in-out"
                    >
                      Cadastrar Categoria
                    </Link>
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="gap-3 justify-around flex items-center p-3">
          <div className="flex rounded-[12rem] items-center border border-emerald p-[5px] bg-lime-50">
            <Menu as="div" className="relative inline-block text-darkMossGreen">
              <div className="flex group">
                <Menu.Button className="transition duration-300 ease-in-out group-hover:text-sunglow inline-flex w-full">
                  <img src={User} className="w-7" alt="User Icon"></img>
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
