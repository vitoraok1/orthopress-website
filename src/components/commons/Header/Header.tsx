import './Header.css';

interface HeaderProps {
  sloganSrc: string;
  priSrc: string;
}

export function Header({ sloganSrc, priSrc}: HeaderProps) {
    return (
        <header className="header bg-blue">
          <div className="header-inner text-white text-center">
            <div className="container grid">
              <div className="header-inner-left">
                <img src={sloganSrc} alt="Slogan Orthopress" className="slogan"/>
                <div className="btn-group">
                  <a href="index.html" className="btn btn-white schedule">Agende sua avaliação</a>
                </div>
              </div>

              <div className="header-inner-right">
                <img src={priSrc} alt="Foto da Priscila"/>
              </div>
            </div>
          </div>
        </header>
    )
}