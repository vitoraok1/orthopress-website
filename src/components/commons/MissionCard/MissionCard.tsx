// import './ProceduresCard.css';
import { missionCards } from '../../../components-mock';
import { Slide, Slider, SliderProps } from '../Slider';
import { useEffect, useState } from 'react';
import { CardMissions } from '../CardMissions';

export function MissionCard() {
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
          Nossos Valores
        </h2>
        <div className="border-line" />
        <Slider settings={settings}>
          { missionCards.map((card,) => (
            <Slide>
              <CardMissions 
                key={card.title} 
                card={card}
              />
            </Slide>
          )) }
      </Slider>
        </div>
    )
}