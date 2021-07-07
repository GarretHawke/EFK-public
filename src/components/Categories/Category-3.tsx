import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category2(): JSX.Element {
  const initialPathCard = './cards/animal-a/';
  const initialPathAudio = './audio/animal-a/';
  const items = [
    {name: 'cat', translate: 'кошка', image: `${initialPathCard}cat.jpg`, audio: `${initialPathAudio}cat.mp3`, id: 1},
    {name: 'chick', translate: 'цыпленок', image: `${initialPathCard}chick.jpg`, audio: `${initialPathAudio}chick.mp3`, id: 2},
    {name: 'chicken', translate: 'курица', image: `${initialPathCard}chicken.jpg`, audio: `${initialPathAudio}chicken.mp3`, id: 3},
    {name: 'dog', translate: 'собака', image: `${initialPathCard}dog.jpg`, audio: `${initialPathAudio}dog.mp3`, id: 4},
    {name: 'horse', translate: 'лошадь', image: `${initialPathCard}horse.jpg`, audio: `${initialPathAudio}horse.mp3`, id: 5},
    {name: 'pig', translate: 'свинья', image: `${initialPathCard}pig.jpg`, audio: `${initialPathAudio}pig.mp3`, id: 6},
    {name: 'rabbit', translate: 'кролик', image: `${initialPathCard}rabbit.jpg`, audio: `${initialPathAudio}rabbit.mp3`, id: 7},
    {name: 'sheep', translate: 'овца', image: `${initialPathCard}sheep.jpg`, audio: `${initialPathAudio}sheep.mp3`, id: 8}
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
