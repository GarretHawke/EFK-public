import React from 'react';
import './Categories.scss';

function StarItem({ isRightAnswer }: { isRightAnswer: boolean }): JSX.Element {
  return (
    <div className={ isRightAnswer ? 'star' : 'star false' }></div>
  );
}

export default StarItem;
