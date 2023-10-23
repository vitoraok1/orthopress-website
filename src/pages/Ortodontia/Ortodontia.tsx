import { Navbar } from '../../components/commons/Navbar';
import { HeaderPages } from '../../components/commons/HeaderPages';
import { Whatsapp } from '../../components/commons/Whatsapp';
import Footer from '../../components/commons/Footer';

import sloganOrtodontia from '../../assets/images/slogan_ortodontia.png';
import priOrtodontia from '../../assets/images/pri_ortodontia.png'
import { ProceduresCard } from '../../components/commons/ProceduresCard';
import { AskedQuestions } from '../../components/commons/AskedQuestions';

function Ortodontia() {
  return (
    <>
      <Navbar />
      <HeaderPages sloganSrc={sloganOrtodontia} priSrc={priOrtodontia}/>
      <ProceduresCard />
      <AskedQuestions />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Ortodontia;
