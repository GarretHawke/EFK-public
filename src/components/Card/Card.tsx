import React, { useState } from "react";
import { useEffect } from "react";
import './Card.scss';

function Card({ item, isPlayMode, arrayOfAnswers, setAnswers, arrayName, numberOfItem, setNumberOfItem, isEndGame, setEndGame, isGameStarted, newAudio }: {item: {name: string, translate: string, image: string, audio: string, id: number}, isPlayMode: boolean, arrayOfAnswers: boolean[], setAnswers: React.Dispatch<React.SetStateAction<boolean[]>>, arrayName: string, numberOfItem: number, setNumberOfItem: React.Dispatch<React.SetStateAction<number>>, isEndGame: boolean, setEndGame: React.Dispatch<React.SetStateAction<boolean>>, isGameStarted: boolean, newAudio: HTMLAudioElement }): JSX.Element {

  const [isFlipped, setFlipped] = useState(false);
  let [isDisable, setDisable] = useState(false);

  useEffect(() => {
    if (isPlayMode === false) {
      setDisable(false);
    }
  });


  let newAudioTrain = new Audio(item.audio);

  const audioError = new Audio('/audio/error.mp3');
  const audioSuccess = new Audio('/audio/success.mp3');

  function clickCardHandlerPlayMode() {
    if (isDisable === false && isGameStarted === true) {
      if (item.name === arrayName) {
        setDisable(true);
        setAnswers([...arrayOfAnswers, true]);
        audioSuccess.play();
        numberOfItem++;
        setNumberOfItem(numberOfItem);
      } else {
        setAnswers([...arrayOfAnswers, false]);
        audioError.play();
      }
    } else return;

    if (numberOfItem === 8) {
      setEndGame(true);
      setNumberOfItem(0);
      const STARS = document.querySelectorAll('.false');
      console.log(STARS.length);
      localStorage.setItem('errors', `${STARS.length}`);
    }
  }

  function clickCardHandlerTrainMode() {
    newAudioTrain.play();
  }

  return (
    <li className={ isPlayMode ? 'card-item play-mode' : (isFlipped ? 'card-item flipped' : 'card-item')} onMouseLeave={() => setFlipped(false)} onClick={ isPlayMode ? clickCardHandlerPlayMode : clickCardHandlerTrainMode } id={item.name}>
      <div className={ isDisable === true ? 'front disable' : 'front'}>
        <div className="card-image-wrapper">
          <img className="card-image" src={item.image} alt={item.name}></img>
        </div>
        <div className="card-content">
          <span>{item.name}</span>
          <audio src={item.audio}></audio>
          <button type="button" className="flip-button" onClick={(event) => {
            setFlipped(true);
            event.stopPropagation();
          }}>
          </button>
        </div>
      </div>
      <div className="back">
        <div className="card-image-wrapper">
          <img className="card-image" src={item.image} alt={item.name}></img>
        </div>
        <div className="card-content">
          <span>{item.translate}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
