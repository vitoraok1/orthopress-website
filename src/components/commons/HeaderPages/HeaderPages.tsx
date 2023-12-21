import './HeaderPages.css';

interface HeaderPagesProps {
  sloganSrc: string;
  priSrc: string;
}

export function HeaderPages({ sloganSrc, priSrc}: HeaderPagesProps) {
    return (
        <header className="header bg-blue header-pages">
          <div className="header-inner text-white text-center">
            <div className="container grid">
              <div className="header-container-left">
                <img src={sloganSrc} alt="Slogan Orthopress" className="slogan-pages"/>
                <div className="btn-group">
                  <a href="index.html" className="btn btn-white schedule">Agende sua avaliação</a>
                </div>
              </div>

              <div className="header-container-right">
                <img src={priSrc} alt="Foto da Priscila"/>
              </div>
            </div>
          </div>
        </header>
    )
}