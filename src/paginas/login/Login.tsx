/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import globo from '../../assets/globo.gif';

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-yellow-950 bg-cover bg-no-repeat" style={{background: "white"}}>
        <div className="rounded-xl bg-lime-200 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 transition-opacity duration-1000 ease-in-out hover:bg-opacity-40">
          <div className="text-green-900">
            <div className="mb-8 flex flex-col items-center">
              <img src="https://i.imgur.com/mX9nNuC.png" width="100" alt="" srcSet="" />
              <h1 className="mb-2 text-2xl font-bold"></h1>
              <span className="text-yellow-950">Enter Login Details</span>
            </div>
            <form onSubmit={login}>
              <div className="mb-4 text-lg">
                <input
                  type="text"
                  name="usuario"
                  placeholder="id@email.com"
                  className="rounded-3xl border-none bg-lime-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={usuarioLogin.usuario} 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  type="password"
                  name="senha"
                  placeholder="*********"
                  className="rounded-3xl border-none bg-lime-800 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={usuarioLogin.senha} 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button type='submit' className="rounded-3xl bg-lime-800 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-lime-700">
                  {isLoading ? <img className='flex justify-center' src={globo} alt="Gif de carregar" width="35px" /> : <span>Entrar</span>}
                </button>
              </div>
            </form>
            <hr className="mt-4 w-full" />
            <p className="mt-2 text-center text-yellow-950">
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-green-950 hover:text-yellow-600">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
