import './Footer.css';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>A Empresa</h4>
              <ul>
                <li><a href="/sobre">Sobre nós</a></li>
                <li><a href="#">Nossos serviços</a></li>
                <li><a href="#">Política de Privacidade</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Precisa de ajuda?</h4>
              <span className="info">Fale com a gente</span>
              <br/>
              <i className="fab fa-whatsapp" /><span className="info">(44) 9836-1616</span>
              <br/>
              <span className="info">WhatsApp Segunda à Sexta, das 09 às 19 horas.<br/> Sábado das 08 às 12 horas</span>
            </div>
            <div className="footer-col">
              <h4>Endereço</h4>
              <span className="info">Travessa Itororó, 407</span>
              <br/>
              <span className="info">Zona 1</span>
              <br/>
              <span className="info">Cianorte-PR</span>
              <br />
              <span className="info">CEP 87200-113</span>
            </div>
    
            <div className="footer-col">
              <h4>Siga nossas redes sociais</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/orthopressodontologia" target='blank'><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/orthopressodontologia/" target='blank'><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@orthopressodontologia1423/" target='blank'><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
  </footer>

  );
};

export default Footer;
