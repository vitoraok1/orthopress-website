import React, { useEffect, useState } from 'react';
import './App.css';
import { Slider, SliderProps, Slide } from './components/commons/Slider';
import { Card } from './components/commons/Card';
import { Navbar } from './components/commons/Navbar';
import { Header } from './components/commons/Header';
import { Banner } from './components/commons/Banner';
import { Whatsapp } from './components/commons/Whatsapp';
import { Form } from './components/commons/Form';
import { Reviews } from './components/commons/Reviews';
import { Localization } from './components/commons/Localization';
import Footer from './components/commons/Footer';

import { cards } from './components-mock';

import Logo2 from './assets/images/logo2.svg';
import { About } from './components/commons/About';

function App() {
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
        windowWidth <= 450 ? 1 : windowWidth <= 768 ? 2 : windowWidth <= 1200 ? 3 : 4,
        4 // Defina o valor máximo como 4
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
      <Whatsapp />
      <Navbar />
      <Header />
      <About />
      <div className="carousel-container">
      <br />
      <h2 className="lead">Nossos Tratamentos em Destaque</h2>
      <p className="text text-lg">Encontre o sorriso dos seus sonhos. <br/>Saiba mais sobre nossos tratamentos especializados!</p>
      <div className="line-art">
        <div />
        <img src={Logo2} alt="Orthopress icon"/>
        <div />
      </div>
      <Slider settings={settings}>
          { cards.map((card,) => (
            <Slide>
              <Card 
                key={card.title} 
                card={card}
              />
            </Slide>
          )) }
      </Slider>
     </div>
     <Banner />
     <Form />
     <Reviews />
     <Localization />
     <Footer />
    </div>
  );
}

export default App;
