import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category1(): JSX.Element {
  const initialPathCard = '/cards/action-a/';
  const initialPathAudio = './audio/action-a/';
  const items = [
    {name: 'cry', translate: 'плакать', image: `${initialPathCard}cry.jpg`, audio: `${initialPathAudio}cry.mp3`, id: 1},
    {name: 'dance', translate: 'танцевать', image: `${initialPathCard}dance.jpg`, audio: `${initialPathAudio}dance.mp3`, id: 2},
    {name: 'dive', translate: 'нырять', image: `${initialPathCard}dive.jpg`, audio: `${initialPathAudio}dive.mp3`, id: 3},
    {name: 'draw', translate: 'рисовать', image: `${initialPathCard}draw.jpg`, audio: `${initialPathAudio}draw.mp3`, id: 4},
    {name: 'fish', translate: 'ловить рыбу', image: `${initialPathCard}fish.jpg`, audio: `${initialPathAudio}fish.mp3`, id: 5},
    {name: 'fly', translate: 'летать', image: `${initialPathCard}fly.jpg`, audio: `${initialPathAudio}fly.mp3`, id: 6},
    {name: 'hug', translate: 'обнимать', image: `${initialPathCard}hug.jpg`, audio: `${initialPathAudio}hug.mp3`, id: 7},
    {name: 'jump', translate: 'прыгать', image: `${initialPathCard}jump.jpg`, audio: `${initialPathAudio}jump.mp3`, id: 8}
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

export default Category1;
