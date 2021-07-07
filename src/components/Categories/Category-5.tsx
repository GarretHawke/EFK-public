import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category5(): JSX.Element {
  const initialPathCard = './cards/clothes/';
  const initialPathAudio = './audio/clothes/';
  const items = [
    {name: 'blouse', translate: 'блузка', image: `${initialPathCard}blouse.jpg`, audio: `${initialPathAudio}blouse.mp3`, id: 1},
    {name: 'boot', translate: 'ботинок', image: `${initialPathCard}boot.jpg`, audio: `${initialPathAudio}boot.mp3`, id: 2},
    {name: 'coat', translate: 'пальто', image: `${initialPathCard}coat.jpg`, audio: `${initialPathAudio}coat.mp3`, id: 3},
    {name: 'dress', translate: 'платье', image: `${initialPathCard}dress.jpg`, audio: `${initialPathAudio}dress.mp3`, id: 4},
    {name: 'pants', translate: 'брюки', image: `${initialPathCard}pants.jpg`, audio: `${initialPathAudio}pants.mp3`, id: 5},
    {name: 'shirt', translate: 'футболка', image: `${initialPathCard}shirt.jpg`, audio: `${initialPathAudio}shirt.mp3`, id: 6},
    {name: 'shoe', translate: 'туфля', image: `${initialPathCard}shoe.jpg`, audio: `${initialPathAudio}shoe.mp3`, id: 7},
    {name: 'skirt', translate: 'юбка', image: `${initialPathCard}skirt.jpg`, audio: `${initialPathAudio}skirt.mp3`, id: 8}
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

export default Category5;
