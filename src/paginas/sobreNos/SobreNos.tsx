import { useEffect, useState } from 'react';
import sn1 from '../../assets/sn1.jpg';
import sn2 from '../../assets/sn2.jpg';
import sn3 from '../../assets/sn3.jpg';
import sn4 from '../../assets/sn4.jpg';
import sn5 from '../../assets/sn5.jpg';

function SobreNos() {
  const [contagem, setContagem] = useState(134);

  useEffect(() => {
    const interval = setInterval(() => {
      setContagem(contagemAtual => contagemAtual + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container max-w-screen-lg mx-auto px-4">

      {/* Seção do contador */}
      <div className="text-center mt-5">
        <div className="mx-auto p-5 bg-gradient-to-br from-teal-50 to-lime-100 rounded-lg shadow-md max-w-sm">
          <h1 className="text-xl font-semibold">Sua contribuição faz a diferença!</h1>
          <p className="text-lg">Quilos de alimentos doados:</p>
          <div className="text-white bg-white bg-opacity-25 rounded-full mt-3 inline-block px-5 py-2">
            <span className="text-2xl font-bold text-green-700">{contagem}</span>
          </div>
        </div>
      </div>

      {/* Seção 1 */}
      <h1 className="text-xl font-bold mt-8 uppercase text-yellow-950">Sobre Nós</h1>
      <section className="flex flex-col md:flex-row items-center mt-8">
        <div className="md:w-1/2">
          <p>Bem-vindo ao Oasis, onde cada compra alimenta uma missão dupla: nutrir corpos e almas, e semear um futuro mais sustentável e justo para todos.
            Nascemos da crença profunda de que a alimentação não é apenas um direito básico, mas o alicerce de uma comunidade saudável.
            Em um mundo onde o excesso e a escassez convivem lado a lado, Oasis emerge como uma ponte entre o campo e a cidade, entre a abundância e a necessidade,
            unindo forças com agricultores familiares para trazer até você produtos de qualidade incomparável, cultivados com amor, respeito e dedicação ao meio ambiente.</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={sn3} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '70%' }} />           </div>
      </section>

      {/* Seção 2  */}
      <h3 className="text-xl font-bold my-6 uppercase text-yellow-950 flex max-[767px]:flex-row flex-row-reverse">Nossa Missão</h3>
      <section className="flex flex-col md:flex-row items-center my-8">
        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
          <img src={sn1} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '70%' }} />           </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <p> O Oásis tem uma missão simples, porém poderosa: alimentar o corpo e a alma. Acreditamos no poder da alimentação não só como nutrição física, mas como um veículo de mudança social.
            Por isso, para cada produto vendido em nossa plataforma, doamos um igual a famílias em situação de vulnerabilidade social. Com essa ação, não só apoiamos a agricultura familiar,
            sustentável e ética, mas também contribuímos diretamente para a luta contra a fome e a promoção de uma sociedade mais igualitária.</p>
        </div>
      </section>

      {/* Seção 3  */}
      <h3 className="text-xl font-bold my-6 uppercase text-yellow-950">Por Que Agricultura Familiar?</h3>
      <section className="flex flex-col md:flex-row items-center my-8">
        <div className="md:w-1/2">
          <p>A agricultura familiar é o coração pulsante do nosso negócio. Escolhemos trabalhar com pequenos produtores porque sabemos que,
            além de serem os guardiões de um conhecimento agrícola precioso, eles são essenciais para a sustentabilidade do nosso planeta.
            Ao apoiar a agricultura familiar, não só garantimos produtos frescos e de alta qualidade para você, mas também promovemos a biodiversidade,
            a conservação do solo e da água, e a redução das emissões de carbono.</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={sn2} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '55%' }} />           </div>
      </section>

      {/* Seção 4 */}
      <h3 className="text-xl font-bold my-6 uppercase text-yellow-950 flex flex-row-reverse">Contribuindo para o Objetivo de Desenvolvimento Sustentável da ONU</h3>
      <section className="flex flex-col md:flex-row items-center my-8">
        <div className="md:w-1/2 flex justify-center order-2 md:order-1">
          <img src={sn5} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '70%' }} />           </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <p>Oasis não é apenas um e-commerce; é uma causa. Estamos comprometidos com o Objetivo de Desenvolvimento Sustentável (ODS) nº 2 da ONU:
            Fome Zero e Agricultura Sustentável. Através de nossas operações, contribuímos ativamente para a erradicação da fome,
            o incentivo à agricultura sustentável e o apoio ao pequeno agricultor, pilares fundamentais para a construção de um mundo melhor.</p>
        </div>
      </section>

      {/* Seção 5  */}
      <h3 className="text-xl font-bold my-6 uppercase text-yellow-950">Junte-se a Nós</h3>
      <section className="flex flex-col md:flex-row items-center my-8">
        <div className="md:w-1/2">
          <p>Cada compra feita no Oasis é um passo em direção a um mundo onde ninguém vai dormir com fome, onde os produtores são valorizados e onde a sustentabilidade
            não é apenas uma palavra da moda, mas uma realidade tangível. Junte-se a nós nesta jornada. Com cada produto Oasis que você escolhe,
            você alimenta uma cadeia de boas ações, sustentabilidade e esperança.</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={sn4} alt="Descrição da imagem 5" className="max-w-xs md:max-w-md" style={{ width: '70%' }} />          </div>
      </section>

      <h3 className="text-xl font-bold my-6 uppercase text-yellow-950">Porque juntos, somos um oásis de possibilidades.</h3>
    </div>
  );
}

export default SobreNos;