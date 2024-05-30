import React from "react";
import "./FlipCard.css";

interface FlipCard {
  image: string;
  cardTitle: string;
  cardData: Object;
}

const FlipCard: React.FC<FlipCard> = ({ image, cardTitle, cardData }) => {


  const renderCardData = (cardData: { [key: string]: any }) => {
    return Object.keys(cardData).map(key => (
      <p key={key}>
        {key.charAt(0).toUpperCase() + key.slice(1)}: {cardData[key]}
      </p>
    ));
  };


  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} className="flip-card-img" alt="stadium-image" />
        </div>
        <div className="flip-card-back">
          <div className="flip-card-details">
          <h2 className="flip-card-title">{cardTitle}</h2>
          <div >
            {renderCardData(cardData)}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
