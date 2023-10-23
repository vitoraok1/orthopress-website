import { CardType } from "../Card";

import './CardProcedures.css';

interface CardProps {
  card: CardType,
}

export function CardProcedures({ card }: CardProps) {
  const { title, content, image } = card;
  return (
    <div className="card card-procedures">
      <img src={image.url} alt={image.alt} className="card-img"/>
      <div className="card-procedures-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}