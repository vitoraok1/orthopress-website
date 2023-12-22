import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo1 from '../../../assets/images/logo1.svg';
import Logo2 from '../../../assets/images/logo2.svg';

interface NavbarState {
  clicked: boolean;
  desktopLogo: boolean;
}

function thisLocation(path: any) {
  const location = window.location.pathname;

  if (location === path) {
    return 'active'
  }
}

export class Navbar extends Component<{}, NavbarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clicked: false,
      desktopLogo: window.innerWidth > 1440,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ desktopLogo: window.innerWidth > 1440 });
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }
  

  render() {
    const { desktopLogo } = this.state;
    return (
      <nav className="nav">
        <a href="/">
          <img src={ desktopLogo ? Logo1 : Logo2 } alt="Logo Orthopress"/>
        </a>

        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
          <li><NavLink to="/" className={ thisLocation("/") }>Início</NavLink></li>
          <li><NavLink to="/sobre" className={ thisLocation("/sobre") }>Sobre</NavLink></li>
          <li><NavLink to="/ortodontia" className={ thisLocation("/ortodontia") }>Ortodontia</NavLink></li>
          <li><NavLink to="/endodontia" className={ thisLocation("/endodontia") }>Endodontia</NavLink></li>
          <li><NavLink to="/cirurgia" className={ thisLocation("/cirurgia") }>Cirurgia</NavLink></li>
          <li><a href="index.html">Implantodontia</a></li>
          <li><a href="index.html">Próteses</a></li>
          <li><a href="index.html">Dentística</a></li>
          <li><a href="index.html">Prevenção</a></li>
          <li><a href="index.html">HOF</a></li>
          <li><a href="index.html">Odontopediatria</a></li>
          <li><a href="index.html">Periodontia</a></li>
          <li><a href="index.html">Planos</a></li>
        </ul>

        <div className="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    );
  }
}