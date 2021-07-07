import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category7(): JSX.Element {
  const initialPathCard = './cards/food/';
  const initialPathAudio = './audio/food/';
  const items = [
    {name: 'apple', translate: 'яблоко', image: `${initialPathCard}apple.jpg`, audio: `${initialPathAudio}apple.mp3`, id: 1},
    {name: 'cookie', translate: 'печенье', image: `${initialPathCard}cookie.jpg`, audio: `${initialPathAudio}cookie.mp3`, id: 2},
    {name: 'cucumber', translate: 'огурец', image: `${initialPathCard}cucumber.jpg`, audio: `${initialPathAudio}cucumber.mp3`, id: 3},
    {name: 'ham', translate: 'ветчина', image: `${initialPathCard}ham.jpg`, audio: `${initialPathAudio}ham.mp3`, id: 4},
    {name: 'meat', translate: 'мясо', image: `${initialPathCard}meat.jpg`, audio: `${initialPathAudio}meat.mp3`, id: 5},
    {name: 'milk', translate: 'молоко', image: `${initialPathCard}milk.jpg`, audio: `${initialPathAudio}milk.mp3`, id: 6},
    {name: 'potato', translate: 'картофель', image: `${initialPathCard}potato.jpg`, audio: `${initialPathAudio}potato.mp3`, id: 7},
    {name: 'sausage', translate: 'сосиска', image: `${initialPathCard}sausage.jpg`, audio: `${initialPathAudio}sausage.mp3`, id: 8}
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

export default Category7;
