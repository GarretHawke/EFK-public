import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';

function Category6(): JSX.Element {
  const initialPathCard = './cards/emotions/';
  const initialPathAudio = './audio/emotions/';
  const items = [
    {name: 'angry', translate: 'злой', image: `${initialPathCard}angry.jpg`, audio: `${initialPathAudio}angry.mp3`, id: 1},
    {name: 'happy', translate: 'счастливый', image: `${initialPathCard}happy.jpg`, audio: `${initialPathAudio}happy.mp3`, id: 2},
    {name: 'laugh', translate: 'смеющийся', image: `${initialPathCard}laugh.jpg`, audio: `${initialPathAudio}laugh.mp3`, id: 3},
    {name: 'sad', translate: 'грустный', image: `${initialPathCard}sad.jpg`, audio: `${initialPathAudio}sad.mp3`, id: 4},
    {name: 'scared', translate: 'испуганный', image: `${initialPathCard}scared.jpg`, audio: `${initialPathAudio}scared.mp3`, id: 5},
    {name: 'smile', translate: 'улыбающийся', image: `${initialPathCard}smile.jpg`, audio: `${initialPathAudio}smile.mp3`, id: 6},
    {name: 'surprised', translate: 'удивленный', image: `${initialPathCard}surprised.jpg`, audio: `${initialPathAudio}surprised.mp3`, id: 7},
    {name: 'tired', translate: 'уставший', image: `${initialPathCard}tired.jpg`, audio: `${initialPathAudio}tired.mp3`, id: 8}
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

export default Category6;
