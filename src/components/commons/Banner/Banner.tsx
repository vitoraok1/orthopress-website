import './Banner.css';
import Atendimento1 from '../../../assets/images/atendimento.png';
import Atendimento2 from '../../../assets/images/atendimento2.png';
import { Component } from 'react';

interface BannerState {
  desktopBanner: boolean;
}

export class Banner extends Component<{}, BannerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      desktopBanner: window.innerWidth > 768,
    };
  }


  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ desktopBanner: window.innerWidth > 768 });
  }

  render() {
    const { desktopBanner } = this.state;
    return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-img-container">
          <img src={ desktopBanner ? Atendimento2 : Atendimento1 } alt="Banner Atendimento" />
        </div>
        <div className="btn-group service-container">
          <a href="index.html" className="btn btn-white schedule service">Saiba Mais</a>
        </div>
      </div>
    </div>
    )
  };
}