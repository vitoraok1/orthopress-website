import { Navbar } from '../../components/commons/Navbar';
import { HeaderPages } from '../../components/commons/HeaderPages';
import { Whatsapp } from '../../components/commons/Whatsapp';
import Footer from '../../components/commons/Footer';

import sloganImplantodontia from '../../assets/images/slogan_implantodontia.png';
import priImplantodontia from '../../assets/images/pri_implantodontia.png'
import { ImplantodontiaSection1 } from '../../components/commons/ImplantodontiaSection1';

import card1 from '../../assets/images/card_1_implantodontia.png';
import card2 from '../../assets/images/card_2_implantodontia.png';
import card3 from '../../assets/images/card_3_implantodontia.png';
import card4 from '../../assets/images/card_4_implantodontia.png';

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function Implantodontia() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',   // De onde a animação deve começar ('top', 'bottom', 'left', 'right')
      distance: '80px',   // Quão longe o elemento deve se deslocar durante a animação
      duration: 2500,     // Duração da animação em milissegundos
      reset: false         // Reseta a animação após cada utilização
    });

    sr.reveal('.nav', {
      delay: 200,   // Atraso antes da animação começar em milissegundos
    });

    sr.reveal('.header', {
      delay: 1500,   // Atraso antes da animação começar em milissegundos
      distance: '160px',
    });
  }
  , []);
  return (
    <div>
      <Navbar />
      <HeaderPages sloganSrc={sloganImplantodontia} priSrc={priImplantodontia}/>
      <ImplantodontiaSection1 />
      <div className="implant-main-container">
        <div className="implant-texts">
          <h2 className="implant">
            Procedimentos
          </h2>
          <div className="border-line" />
          <p className="text text-lg">
          Os procedimentos para realizar um implante dentário começam com uma avaliação da saúde bucal, seguida pela cirurgia de colocação do implante no osso da mandíbula ou maxilar. Após a cicatrização, é feita uma segunda cirurgia para conectar o pilar protético. <br /><br />Por fim, a prótese dentária é fixada sobre o implante, restaurando a estética e função mastigatória. O acompanhamento regular é importante para garantir o sucesso do implante a longo prazo.
          </p>
        </div>
        <div className='implant-container'>
          { card1 && <img src={card1} alt="card1" className="implant-card"/> }
          { card2 && <img src={card2} alt="card2" className="implant-card"/> }
          { card3 && <img src={card3} alt="card3" className="implant-card"/> }
          { card4 && <img src={card4} alt="card4" className="implant-card"/> }
        </div>
      </div>

      <div className="implant-main-container">
        <div className="implant-texts">
          <h2 className="implant">
            Cuidados com o implante
          </h2>
          <div className="border-line" />
          <p className="text text-lg">
          É essencial que os pacientes mantenham a mesma dedicação à higiene bucal ao utilizar próteses dentárias, incluindo a limpeza regular, o uso de fio dental e visitas periódicas ao dentista para avaliações e ajustes necessários. Além disso, é recomendado evitar alimentos duros que possam danificar a prótese, mesmo que seja feita de material resistente.<br /><br />
          O tabagismo é prejudicial à saúde bucal de várias maneiras e pode afetar negativamente o processo de osseointegração, aumentando o risco de falha do implante. Portanto, é importante evitar o tabaco durante todo o processo de implante para garantir o sucesso e a durabilidade do tratamento.
          </p>
        </div>
      </div>

      <div className="implant-main-container">
        <div className="implant-texts">
          <h2 className="implant">
            Contraindicações
          </h2>
          <div className="border-line" />
          <p className="text text-lg">
          Existem algumas contraindicações para a realização de implantes dentários. Isso inclui pacientes com condições médicas não controladas, como diabetes descompensada, problemas cardíacos graves ou imunidade comprometida. Além disso, a falta de osso na área do implante, o tabagismo crônico e a gravidez, especialmente no primeiro trimestre, também podem ser contraindicações. Entre em contato conosco e saiba mais!
          </p>
        </div>
      </div>

      <div className="btn-group">
        <a href="index.html" className="btn btn-blue schedule btn-ortodontia">Clique aqui para agendar sua avaliação inicial com a Dra. Priscila Ferraz Fuzimoto</a>
      </div>
      
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Implantodontia;
