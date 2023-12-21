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

function Ortodontia() {
  return (
    <>
      <Navbar />
      <HeaderPages sloganSrc={sloganOrtodontia} priSrc={priOrtodontia}/>
      <ProceduresCard title={'Conheça os modelos mais utilizados no tratamento ortodôntico'} carouselContent={bannersOrtodontia} showBannerMain={ true } />
      <AskedQuestions faqTheme={faqOrtodontia}/>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Ortodontia;
