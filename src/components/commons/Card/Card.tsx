import { CardType } from "./types";

import './Card.css';

interface CardProps {
  card: CardType,
}

export function Card({ card }: CardProps) {
  const { title, content, link, image } = card;
  return (
    <div className="card">
      <img src={image.url} alt={image.alt} className="card-img"/>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={link} className="btn btn-blue more-info">Saiba mais</a>
      </div>
    </div>
  );
}