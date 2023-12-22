import { Navbar } from '../../components/commons/Navbar';
import { HeaderPages } from '../../components/commons/HeaderPages';
import { Whatsapp } from '../../components/commons/Whatsapp';
import Footer from '../../components/commons/Footer';

import sloganOrtodontia from '../../assets/images/slogan_ortodontia.png';
import priOrtodontia from '../../assets/images/pri_ortodontia.png'
import { ProceduresCard } from '../../components/commons/ProceduresCard';
import { AskedQuestions } from '../../components/commons/AskedQuestions';
import { bannersOrtodontia } from '../../components-mock';
import { faqOrtodontia } from '../../components-mock';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function Ortodontia() {
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
      <HeaderPages sloganSrc={sloganOrtodontia} priSrc={priOrtodontia}/>
      <ProceduresCard title={'Conheça os modelos mais utilizados no tratamento ortodôntico'} carouselContent={bannersOrtodontia} showBannerMain={ true } />
      <AskedQuestions faqTheme={faqOrtodontia}/>
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Ortodontia;
