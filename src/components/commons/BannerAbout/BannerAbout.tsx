import './BannerAbout.css';
import React, { Component } from 'react';

interface BannerAboutProps {
  bannerMobilePath: string;
  bannerDesktopPath: string;
  bannerTitle?: string;
}

interface BannerState {
  desktopBanner: boolean;
}

export class BannerAbout extends Component<BannerAboutProps, BannerState> {
  constructor(props: BannerAboutProps) {
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
  };

  render() {
    const { desktopBanner } = this.state;
    const { bannerMobilePath, bannerDesktopPath, bannerTitle } = this.props;

    return (
      <div className="banner-about">
      {bannerTitle && ( 
        <div>
          <h2 className="lead">
            {bannerTitle}
          </h2>
          <div className="border-line" />
        </div>
      )}
      <div className="banner-about-container">
        <img src={desktopBanner ? bannerDesktopPath : bannerMobilePath} alt="Banner Sobre" />
      </div>
    </div>
    );
  }
}
