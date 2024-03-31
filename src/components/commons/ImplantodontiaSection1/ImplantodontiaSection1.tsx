import './ImplantodontiaSection1.css';
import BannerImplanto from '../../../assets/images/banner_implanto.png'

export function ImplantodontiaSection1() {
  return (
    <div className="about-container">
      <div className="about-texts">
        <h2 className="implant">
          O que é a Implantodontia?
        </h2>
        <div className="border-line" />
        <p className="text text-lg">
        Implantodontia é uma especialidade da odontologia que se concentra na substituição de dentes ausentes ou perdidos. <br /><br />Os implantes dentários são estruturas de titânio, biocompatíveis com o osso humano, inseridos cirurgicamente no maxilar ou mandíbula, funcionando como raízes artificiais. Uma vez integrados ao osso, servem de suporte para próteses dentárias, restaurando a função mastigatória, a estética e prevenindo a reabsorção óssea.
        </p>
      </div>
      <div>
        <img src={ BannerImplanto } alt="Banner Implantodontia" className="about-img" />
      </div>
    </div>
  );
}