import { Navbar } from '../../components/commons/Navbar';
import { HeaderPages } from '../../components/commons/HeaderPages';
import { Whatsapp } from '../../components/commons/Whatsapp';
import Footer from '../../components/commons/Footer';

import sloganCirurgia from '../../assets/images/slogan_cirurgia.png';
import priCirurgia from '../../assets/images/pri_cirurgia.png'
import { ProceduresCard } from '../../components/commons/ProceduresCard';
import { AskedQuestions } from '../../components/commons/AskedQuestions';

import { bannersCirurgia } from '../../components-mock';
import { faqCirurgia } from '../../components-mock';


function Cirurgia() {
  return (
    <>
      <Navbar />
      <HeaderPages sloganSrc={sloganCirurgia} priSrc={priCirurgia}/>
      <ProceduresCard title={'Conheça os procedimentos mais utilizados na endodontia'} carouselContent={bannersCirurgia} />
      <AskedQuestions faqTheme={faqCirurgia}/>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Cirurgia;
