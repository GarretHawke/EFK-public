import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';
import StarList from "./StarList";
import { useEffect } from "react";

function Category({ isPlayMode, setPlayMode, cardItems, isGameStarted, setGameStarted, isEndGame, setEndGame, arrayOfAnswers, setAnswers }: { isPlayMode: boolean, setPlayMode: React.Dispatch<React.SetStateAction<boolean>>, cardItems: {name: string; translate: string; image: string; audio: string; id: number; }[],  isGameStarted: boolean, setGameStarted: React.Dispatch<React.SetStateAction<boolean>>, isEndGame: boolean, setEndGame: React.Dispatch<React.SetStateAction<boolean>>, arrayOfAnswers: boolean[], setAnswers: React.Dispatch<React.SetStateAction<boolean[]>> }): JSX.Element {

  const failureSound = new Audio('/audio/fail.mp3');
  const winSound = new Audio('/audio/win.mp3');

  let [numberOfItem, setNumberOfItem] = useState(0);
  let [cards, setCards] = useState(0);

  const errors = Number(localStorage.getItem('errors'));
  useEffect(() => {
    if (isEndGame === false && isGameStarted === true) {
      let CARDS = document.querySelectorAll('.front.disable');
      setCards(CARDS.length);
      if (CARDS.length > cards) {
        setTimeout(() => {
          newAudio.play();
        }, 1500);
      }
    }
    else return;
  });

  //

  const cardItemsCopied = cardItems.concat();
  const newArray = cardItemsCopied.concat().sort(() => Math.random() - 0.5);

  let [sounds, setSounds] = useState(cardItemsCopied.concat().sort(() => Math.random() - 0.5));

  const newItem = sounds[numberOfItem];

  const newItemName = newItem.name;
  const newAudio = new Audio(newItem.audio);

  //start button handler
  function startButtonHandler() {
    setGameStarted(true);
    setTimeout(() => {
      newAudio.play();
      setNumberOfItem(0);
    }, 1000);
  }

  //repeat button handler
  function repeatButtonHandler() {
    newAudio.play();
  }

  if (isEndGame === true) {
    setTimeout(() => {
      setEndGame(false);
      setPlayMode(false);
      setGameStarted(false);
      setAnswers([]);
      //setSounds(newArray);
    }, 3000);
  }

  return (
    <div className={ isEndGame === false ? (isPlayMode ? 'container play-mode' : 'container') : ((errors === 0) ?  'container finish-game' : 'container lose')  }>
      <StarList isPlayMode={isPlayMode} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />
      <div className="container-inner">
        <ul className="card-list">
          {cardItems.map(item =>
          <Card item={item} key={item.id} isPlayMode={isPlayMode} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} arrayName={newItemName} numberOfItem={numberOfItem} setNumberOfItem={setNumberOfItem} isEndGame={isEndGame} setEndGame={setEndGame} isGameStarted={isGameStarted} newAudio={newAudio} />
          )}
        </ul>
      </div>
      <div className={ isPlayMode ? 'button-container' : 'button-container disabled' }>
        <button className={ isGameStarted ? 'button-play repeat' : 'button-play' } onClick={ isGameStarted ? repeatButtonHandler : startButtonHandler }></button>
      </div>
    </div>
  );
}

export default Category;
