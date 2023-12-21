import './Mission.css';
import React, { Component } from 'react';

interface MissionProps {
  bannerTitle?: string;
  missionBanner: string;
}

export class Mission extends Component<MissionProps> {

  render() {
    const { missionBanner, bannerTitle } = this.props;

    return (
      <div className="mission-container">
        <div>
          <h2 className="lead">
            { bannerTitle }
          </h2>
          { bannerTitle && <div className="border-line" />}
        </div>
        <div className="mission-img">
          <img src={missionBanner} alt="Banner Sobre" />
        </div>
      </div>
    );
  }
}
