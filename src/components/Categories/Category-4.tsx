import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category4(): JSX.Element {
  const initialPathCard = './cards/animal-b/';
  const initialPathAudio = './audio/animal-b/';
  const items = [
    {name: 'bird', translate: 'птица', image: `${initialPathCard}bird.jpg`, audio: `${initialPathAudio}bird.mp3`, id: 1},
    {name: 'dolphin', translate: 'дельфин', image: `${initialPathCard}dolphin.jpg`, audio: `${initialPathAudio}dolphin.mp3`, id: 2},
    {name: 'fish', translate: 'рыба', image: `${initialPathCard}fish.jpg`, audio: `${initialPathAudio}fish.mp3`, id: 3},
    {name: 'frog', translate: 'лягушка', image: `${initialPathCard}frog.jpg`, audio: `${initialPathAudio}frog.mp3`, id: 4},
    {name: 'giraffe', translate: 'жираф', image: `${initialPathCard}giraffe.jpg`, audio: `${initialPathAudio}giraffe.mp3`, id: 5},
    {name: 'lion', translate: 'лев', image: `${initialPathCard}lion.jpg`, audio: `${initialPathAudio}lion.mp3`, id: 6},
    {name: 'mouse', translate: 'мышь', image: `${initialPathCard}mouse.jpg`, audio: `${initialPathAudio}mouse.mp3`, id: 7},
    {name: 'turtle', translate: 'черепаха', image: `${initialPathCard}turtle.jpg`, audio: `${initialPathAudio}turtle.mp3`, id: 8}
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

export default Category4;
