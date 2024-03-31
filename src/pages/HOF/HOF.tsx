import { Navbar } from '../../components/commons/Navbar';
import { HeaderPages } from '../../components/commons/HeaderPages';
import { Whatsapp } from '../../components/commons/Whatsapp';
import Footer from '../../components/commons/Footer';

import sloganHOF from '../../assets/images/slogan_hof.png';
import priHOF from '../../assets/images/pri_hof.png'
import { ProceduresCard } from '../../components/commons/ProceduresCard';
import { AskedQuestions } from '../../components/commons/AskedQuestions';

import { bannersHOF } from '../../components-mock';
import { faqHOF } from '../../components-mock';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function HOF() {
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
      <HeaderPages sloganSrc={sloganHOF} priSrc={priHOF}/>
      <ProceduresCard title={'Conheça os procedimentos mais utilizados na Harmonização Orofacial'} carouselContent={bannersHOF} />
      <AskedQuestions faqTheme={faqHOF}/>
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default HOF;
