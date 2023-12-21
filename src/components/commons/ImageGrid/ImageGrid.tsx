import './ImageGrid.css';
import { gridImages } from '../../../components-mock';
import { Component } from 'react';

type ImageGridProps = {
  title: string;
  category: string;
  source: string;
};

type gridTitleProps = {
  gridTitle: string;
}

function ImageContainer({ title, category, source }: ImageGridProps) {

  return (
    <div className="image-box">
        <img src={source} alt="img.jpg" />
      <div className="overlay">
        <div className="details">
      </div>
      </div>
    </div>
  );
}

export class ImageGrid extends Component<gridTitleProps> {

  render() {
    const { gridTitle } = this.props;
    return (
      <div>
        <div>
          <h2 className="lead">
            { gridTitle }
          </h2>
          { gridTitle && <div className="border-line" />}
        </div>
        <div className="image-gallery">
          {gridImages.map((image, index) => (
            <ImageContainer key={index} title={image.title} category={image.category} source={image.source} />
          ))}
        </div>
      </div>
    );
  }
}
