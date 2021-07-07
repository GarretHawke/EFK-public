import React, { useState } from "react";
import './Card.scss';

function Card({ item }: {item: {name: string, translate: string, image: string, audio: string, id: number}}): JSX.Element {

  const [isFlipped, setFlipped] = useState(false);

  let newAudio = new Audio(item.audio);

  return (
    <li className={isFlipped ? 'card-item flipped' : 'card-item'} onMouseLeave={() => setFlipped(false)} onClick={() => newAudio.play()}>
      <div className="front">
        <div className="card-image-wrapper">
          <img className="card-image" src={item.image} alt={item.name}></img>
        </div>
        <div className="card-content">
          <span>{item.name}</span>
          <audio src={item.audio}></audio>
          <button type="button" className="flip-button" onClick={(event) => {
            setFlipped(true);
            event.stopPropagation();
          }}>
          </button>
        </div>
      </div>
      <div className="back">
        <div className="card-image-wrapper">
          <img className="card-image" src={item.image} alt={item.name}></img>
        </div>
        <div className="card-content">
          <span>{item.translate}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
