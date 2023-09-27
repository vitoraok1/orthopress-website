import './Header.css';
import Slogan from '../../../assets/images/slogan.png';
import Pri from '../../../assets/images/pri.png';

export function Header() {
    return (
        <header className="header bg-blue">
          <div className="header-inner text-white text-center">
            <div className="container grid">
              <div className="header-inner-left">
                <img src={Slogan} alt="Slogan Orthopress" className="slogan"/>
                <div className="btn-group">
                  <a href="index.html" className="btn btn-white schedule">Agende sua avaliação</a>
                </div>
              </div>

              <div className="header-inner-right">
                <img src={Pri} alt="Foto da Priscila"/>
              </div>
            </div>
          </div>
        </header>
    )
}