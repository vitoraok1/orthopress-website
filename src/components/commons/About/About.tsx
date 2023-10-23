import './About.css';
import Odonthopress from '../../../assets/images/fachada2.png'

export function About() {
  return (
    <div className="about-container">
      <div className="about-texts">
        <h2 className="lead">
          Quem somos
        </h2>
        <div className="border-line" />
        <p className="text text-lg">
        A Orthopress é uma clínica odontológica preparada para atender todas as necessidades de seus clientes. 
        <br />Contamos com uma estrutura completa onde o paciente encontrará um atendimento reservado, individualizado e de qualidade.
        </p>
        <div className="btn-group more">
          <a href="index.html" className="btn btn-white schedule know-more">Saiba Mais</a>
        </div>
      </div>
      <div>
        <img src={ Odonthopress } alt="Fachada Odonthopress" className="about-img" />
      </div>
    </div>
  );
}