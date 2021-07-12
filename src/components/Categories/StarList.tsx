import React from 'react';
import { useEffect } from 'react';
import './Categories.scss';
import StarItem from './StarItem';

function StarList({ isPlayMode, arrayOfAnswers, setAnswers }: { isPlayMode: boolean, arrayOfAnswers: boolean[], setAnswers: React.Dispatch<React.SetStateAction<boolean[]>>}): JSX.Element {
  let i = 0;

  return (
    <div className={ isPlayMode === true ? 'star-container' : 'star-container disabled' }>
      {arrayOfAnswers.map(item => <StarItem isRightAnswer={item} key={i++} />)}
    </div>
  );
}

export default StarList;
