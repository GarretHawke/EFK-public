import React, { useState }  from "react";
import Card from "@/components/Card";
import './Categories.scss';
import StarList from "./StarList";
import { useEffect } from "react";

function Category({ isPlayMode, setPlayMode, cardItems/* , soundItems */, isGameStarted, setGameStarted, isEndGame, setEndGame, arrayOfAnswers, setAnswers }: { isPlayMode: boolean, setPlayMode: React.Dispatch<React.SetStateAction<boolean>>, cardItems: {name: string; translate: string; image: string; audio: string; id: number; }[], /* soundItems: {name: string; translate: string; image: string; audio: string; id: number; }[], */ isGameStarted: boolean, setGameStarted: React.Dispatch<React.SetStateAction<boolean>>, isEndGame: boolean, setEndGame: React.Dispatch<React.SetStateAction<boolean>>, arrayOfAnswers: boolean[], setAnswers: React.Dispatch<React.SetStateAction<boolean[]>> }): JSX.Element {

  //let [arrayOfAnswers, setAnswers] = useState([]);
  let [numberOfItem, setNumberOfItem] = useState(0);

  //const [isEndGame, setEndGAme] = useState(false);

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
  const cardItemsCopied = cardItems.slice(0);



  /* const newArrayRandomized1 = newArraySliced1.sort(() => Math.random() - 0.5);
  const newAudioArray1 = newArrayRandomized1.concat();
  const newAudioArrayRandomized1 = newAudioArray1.sort(() => Math.random() - 0.5); */
  //



  //let [isGameStarted, setGameStarted] = useState(false);

  //const newItem = soundItems[numberOfItem];
  //const newItem = newAudioArrayRandomized1[numberOfItem];



  const newItem = cardItemsCopied[numberOfItem];

  const newItemName = newItem.name;
  const newAudio = new Audio(newItem.audio);

  //start button handler
  function startButtonHandler() {
    setGameStarted(true);
    //const newAudio = new Audio(newItem.audio);
    newAudio.play();
    setNumberOfItem(0);
  }

  //repeat button handler
  function repeatButtonHandler() {
    //const newAudio = new Audio(newItem.audio);
    newAudio.play();
  }

  if (isEndGame === true) {
    setTimeout(() => {
      setEndGame(false);
      setPlayMode(false);
      setGameStarted(false);
      setAnswers([]);
    }, 3000);
  }

  //useEffect(() => console.log(cardItemsCopied));
  //useEffect(() => console.log(cardItems));

  //let CARDS = document.querySelectorAll('.front.disable');

  //useEffect(() => console.log(CARDS.length));

  /* if (numberOfItem !== 0) {
    setTimeout(() => {
      newAudio.play();
    }, 2000);
  } */

  //console.log(localStorage.getItem('errors'));

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
