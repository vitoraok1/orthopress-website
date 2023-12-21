import { Navbar } from '../../components/commons/Navbar';
import { HeaderPages } from '../../components/commons/HeaderPages';
import { Whatsapp } from '../../components/commons/Whatsapp';
import Footer from '../../components/commons/Footer';

import sloganEndodontia from '../../assets/images/slogan_endodontia.png';
import priEndodontia from '../../assets/images/pri_endodontia.png'
import { ProceduresCard } from '../../components/commons/ProceduresCard';
import { AskedQuestions } from '../../components/commons/AskedQuestions';

import { bannersEndodontia } from '../../components-mock';
import { faqEndodontia } from '../../components-mock';


function Endodontia() {
  return (
    <>
      <Navbar />
      <HeaderPages sloganSrc={sloganEndodontia} priSrc={priEndodontia}/>
      <ProceduresCard title={'Conheça os procedimentos mais utilizados na endodontia'} carouselContent={bannersEndodontia} />
      <AskedQuestions faqTheme={faqEndodontia}/>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Endodontia;
