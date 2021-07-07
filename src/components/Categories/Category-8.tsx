import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category8(): JSX.Element {
  const initialPathCard = './cards/travelling/';
  const initialPathAudio = './audio/travelling/';
  const items = [
    {name: 'airport', translate: 'аэропорт', image: `${initialPathCard}airport.jpg`, audio: `${initialPathAudio}airport.mp3`, id: 1},
    {name: 'bus', translate: 'автобус', image: `${initialPathCard}bus.jpg`, audio: `${initialPathAudio}bus.mp3`, id: 2},
    {name: 'luggage', translate: 'багаж', image: `${initialPathCard}luggage.jpg`, audio: `${initialPathAudio}luggage.mp3`, id: 3},
    {name: 'passport', translate: 'паспорт', image: `${initialPathCard}passport.jpg`, audio: `${initialPathAudio}passport.mp3`, id: 4},
    {name: 'resort', translate: 'курорт', image: `${initialPathCard}resort.jpg`, audio: `${initialPathAudio}resort.mp3`, id: 5},
    {name: 'ticket', translate: 'билет', image: `${initialPathCard}ticket.jpg`, audio: `${initialPathAudio}ticket.mp3`, id: 6},
    {name: 'tourist', translate: 'турист', image: `${initialPathCard}tourist.jpg`, audio: `${initialPathAudio}tourist.mp3`, id: 7},
    {name: 'train', translate: 'поезд', image: `${initialPathCard}train.jpg`, audio: `${initialPathAudio}train.mp3`, id: 8}
  ]

  return (
    <div className="container">
      <div className="container-inner">
        <ul className="card-list">
          {items.sort(() => Math.random() - 0.5).map(item => <Card item={item} key={item.id} />)}
        </ul>
      </div>
    </div>
  );
}

export default Category8;
