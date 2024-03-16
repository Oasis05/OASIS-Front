import Lauane from "../../assets/Lauane.jpg";
import Perfil from "../../assets/Perfil.jpg";
import GitHub from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedIn.svg";
// import { Link } from "react-router-dom";

function Contatos() {
  return (
    <div className="container max-w-screen-lg mx-auto px-4">
      <h1 className="text-xl font-bold mt-8 uppercase text-yellow-950">
        Conheça cada um dos participantes
      </h1>
      <div className="flex flex-wrap">
        {/* PARTICIPANTE 1 */}
        <div className="w-full md:w-1/3 p-4">
          <h5 className="text-sm font-bold my-6 uppercase text-yellow-950 flex flex-row">
            Lauane Gonçalves
          </h5>
          <img
            src={Lauane}
            alt="Foto-Lauane"
            className="max-w-xs md:max-w-md rounded-full"
            style={{ width: "40%" }}
          />
          <section className="mt-8">
            <p>
              <span className="font-bold">Idade:</span> 28 anos
            </p>
            <p>
              <span className="font-bold">Formação:</span> Engenheira de
              Produção e cursando Técnico em Desenvolvimento de Sistemas
            </p>
            <p>
              <span className="font-bold">Tecnologias:</span>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Javascript/Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Nest.js</li>
                <li>Metodologias Ágeis</li>
              </ul>
            </p>
            <p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">Redes sociais:</span>
                <a
                  href="https://github.com/lauanegcsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} className="w-9 h-9" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lauane-goncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} className="w-9 h-9" alt="Linkedin" />
                </a>
              </div>
            </p>
          </section>
        </div>

        {/* PARTICIPANTE 2 */}
        <div className="w-full md:w-1/3 p-4">
          <h5 className="text-sm font-bold my-6 uppercase text-yellow-950 flex flex-row">
          Fulano Sicrano
          </h5>
          <img
            src={Perfil}
            alt="Foto-Perfil"
            className="max-w-xs md:max-w-md rounded-full"
            style={{ width: "40%" }}
          />
          <section className="mt-8">
            <p>
              <span className="font-bold">Idade:</span> X anos
            </p>
            <p>
              <span className="font-bold">Formação:</span> lorem ipsulum
            </p>
            <p>
              <span className="font-bold">Tecnologias:</span>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Javascript/Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Nest.js</li>
                <li>Metodologias Ágeis</li>
              </ul>
            </p>
            <p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">Redes sociais:</span>
                <a
                  href="https://github.com/Perfilgcsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} className="w-9 h-9" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Perfil-goncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} className="w-9 h-9" alt="Linkedin" />
                </a>
              </div>
            </p>
          </section>
        </div>

        {/* PARTICIPANTE 2 */}
        <div className="w-full md:w-1/3 p-4">
          <h5 className="text-sm font-bold my-6 uppercase text-yellow-950 flex flex-row">
          Fulano Sicrano
          </h5>
          <img
            src={Perfil}
            alt="Foto-Perfil"
            className="max-w-xs md:max-w-md rounded-full"
            style={{ width: "40%" }}
          />
          <section className="mt-8">
            <p>
              <span className="font-bold">Idade:</span> X anos
            </p>
            <p>
              <span className="font-bold">Formação:</span> lorem ipsulum
            </p>
            <p>
              <span className="font-bold">Tecnologias:</span>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Javascript/Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Nest.js</li>
                <li>Metodologias Ágeis</li>
              </ul>
            </p>
            <p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">Redes sociais:</span>
                <a
                  href="https://github.com/Perfilgcsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} className="w-9 h-9" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Perfil-goncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} className="w-9 h-9" alt="Linkedin" />
                </a>
              </div>
            </p>
          </section>
        </div>

        {/* PARTICIPANTE 2 */}
        <div className="w-full md:w-1/3 p-4">
          <h5 className="text-sm font-bold my-6 uppercase text-yellow-950 flex flex-row">
          Fulano Sicrano
          </h5>
          <img
            src={Perfil}
            alt="Foto-Perfil"
            className="max-w-xs md:max-w-md rounded-full"
            style={{ width: "40%" }}
          />
          <section className="mt-8">
            <p>
              <span className="font-bold">Idade:</span> X anos
            </p>
            <p>
              <span className="font-bold">Formação:</span> lorem ipsulum
            </p>
            <p>
              <span className="font-bold">Tecnologias:</span>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Javascript/Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Nest.js</li>
                <li>Metodologias Ágeis</li>
              </ul>
            </p>
            <p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">Redes sociais:</span>
                <a
                  href="https://github.com/Perfilgcsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} className="w-9 h-9" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Perfil-goncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} className="w-9 h-9" alt="Linkedin" />
                </a>
              </div>
            </p>
          </section>
        </div>

        {/* PARTICIPANTE 2 */}
        <div className="w-full md:w-1/3 p-4">
          <h5 className="text-sm font-bold my-6 uppercase text-yellow-950 flex flex-row">
          Fulano Sicrano
          </h5>
          <img
            src={Perfil}
            alt="Foto-Perfil"
            className="max-w-xs md:max-w-md rounded-full"
            style={{ width: "40%" }}
          />
          <section className="mt-8">
            <p>
              <span className="font-bold">Idade:</span> X anos
            </p>
            <p>
              <span className="font-bold">Formação:</span> lorem ipsulum
            </p>
            <p>
              <span className="font-bold">Tecnologias:</span>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Javascript/Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Nest.js</li>
                <li>Metodologias Ágeis</li>
              </ul>
            </p>
            <p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">Redes sociais:</span>
                <a
                  href="https://github.com/Perfilgcsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} className="w-9 h-9" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Perfil-goncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} className="w-9 h-9" alt="Linkedin" />
                </a>
              </div>
            </p>
          </section>
        </div>

        {/* PARTICIPANTE 2 */}
        <div className="w-full md:w-1/3 p-4">
          <h5 className="text-sm font-bold my-6 uppercase text-yellow-950 flex flex-row">
          Fulano Sicrano
          </h5>
          <img
            src={Perfil}
            alt="Foto-Perfil"
            className="max-w-xs md:max-w-md rounded-full"
            style={{ width: "40%" }}
          />
          <section className="mt-8">
            <p>
              <span className="font-bold">Idade:</span> X anos
            </p>
            <p>
              <span className="font-bold">Formação:</span> lorem ipsulum
            </p>
            <p>
              <span className="font-bold">Tecnologias:</span>
              <ul className="list-disc pl-5">
                <li>Java</li>
                <li>Javascript/Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Nest.js</li>
                <li>Metodologias Ágeis</li>
              </ul>
            </p>
            <p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">Redes sociais:</span>
                <a
                  href="https://github.com/Perfilgcsilva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} className="w-9 h-9" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Perfil-goncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} className="w-9 h-9" alt="Linkedin" />
                </a>
              </div>
            </p>
          </section>
        </div>

     
      </div>
    </div>
  );
}

export default Contatos;
