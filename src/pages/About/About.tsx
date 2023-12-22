import { Navbar } from '../../components/commons/Navbar';
import { Whatsapp } from '../../components/commons/Whatsapp';
import Footer from '../../components/commons/Footer';

import Pri from '../../assets/images/pri_sobre.png'
import Slogan from '../../assets/images/slogan_sobre.png'
import { BannerAbout } from '../../components/commons/BannerAbout';
import BannerMobile from '../../assets/images/banner_sobre1_mobile.png';
import BannerDesktop from '../../assets/images/banner_sobre1_wide.png';
import BannerMobile2 from '../../assets/images/dados_priscila_mobile.png';
import BannerDesktop2 from '../../assets/images/dados_priscila_wide.png';
import BannerMobile3 from '../../assets/images/banner_sobre2_mobile.png';
import BannerDesktop3 from '../../assets/images/banner_sobre2_wide.png';
import { ImageGrid } from '../../components/commons/ImageGrid';
import { MissionCard } from '../../components/commons/MissionCard';
import { HeaderPages } from '../../components/commons/HeaderPages';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

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
      <HeaderPages sloganSrc={Slogan} priSrc={Pri}/>
      <BannerAbout bannerTitle={'Sobre nós'} bannerMobilePath={BannerMobile} bannerDesktopPath={BannerDesktop} />
      <BannerAbout bannerTitle={'Responsável Técnica'} bannerMobilePath={BannerMobile2} bannerDesktopPath={BannerDesktop2} />
      <ImageGrid gridTitle={'Galeria'} />
      <BannerAbout bannerMobilePath={BannerMobile3} bannerDesktopPath={BannerDesktop3} />
      <MissionCard />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Ortodontia;
