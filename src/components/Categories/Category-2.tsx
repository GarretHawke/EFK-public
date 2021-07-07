import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category2(): JSX.Element {
  const initialPathCard = './cards/action-b/';
  const initialPathAudio = './audio/action-b/';
  const items = [
    {name: 'open', translate: 'открывать', image: `${initialPathCard}open.jpg`, audio: `${initialPathAudio}open.mp3`, id: 1},
    {name: 'play', translate: 'играть', image: `${initialPathCard}play.jpg`, audio: `${initialPathAudio}play.mp3`, id: 2},
    {name: 'point', translate: 'указывать', image: `${initialPathCard}point.jpg`, audio: `${initialPathAudio}point.mp3`, id: 3},
    {name: 'ride', translate: 'ездить', image: `${initialPathCard}ride.jpg`, audio: `${initialPathAudio}ride.mp3`, id: 4},
    {name: 'run', translate: 'бегать', image: `${initialPathCard}run.jpg`, audio: `${initialPathAudio}run.mp3`, id: 5},
    {name: 'sing', translate: 'петь', image: `${initialPathCard}sing.jpg`, audio: `${initialPathAudio}sing.mp3`, id: 6},
    {name: 'skip', translate: 'пропускать', image: `${initialPathCard}skip.jpg`, audio: `${initialPathAudio}skip.mp3`, id: 7},
    {name: 'swim', translate: 'плавать', image: `${initialPathCard}swim.jpg`, audio: `${initialPathAudio}swim.mp3`, id: 8}
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

export default Category2;
