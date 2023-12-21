import './ProceduresCard.css';
import BannerMain from '../../../assets/images/banner_main_ortodontia.png'
// import { bannersOrtodontia } from '../../../components-mock';
import { Slide, Slider, SliderProps } from '../Slider';
import { CardProcedures } from '../CardProcedures';
import { useEffect, useState } from 'react';

interface CardContent {
  title: string;
  content: string;
  link: string;
  image: {
    url: string;
    alt: string;
  }
}

interface ProceduresCardProps {
  title: string;
  carouselContent: CardContent[];
  showBannerMain?: boolean;
}

export function ProceduresCard({ title, carouselContent, showBannerMain }: ProceduresCardProps) {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: slidesPerView,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
  };
  
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      const newSlidesPerView = Math.min(
        windowWidth <= 450 ? 1 : windowWidth <= 768 ? 2 : 3,
        3 // Defina o valor máximo como 4
      );
      setSlidesPerView(newSlidesPerView);
    }

    // Adicione um listener para o evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Chame a função de manipulação de redimensionamento imediatamente
    handleResize();

    // Remova o listener do evento de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <div>
        <h2 className="lead title-procedures">
          { title }
        </h2>
        <div className="border-line" />
        {showBannerMain && (
          <div>
            <img src={BannerMain} alt="banner main" className="banner-main" />
          </div>
        )}
        <Slider settings={settings}>
          { carouselContent.map((banner,) => (
            <Slide>
              <CardProcedures 
                key={banner.title} 
                card={banner}
              />
            </Slide>
          )) }
      </Slider>
        </div>
    )
}