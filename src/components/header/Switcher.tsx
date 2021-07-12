import React, { useEffect } from "react";

function Switcher({ isPlayMode, setPlayMode, isGameStarted, setGameStarted }: {isPlayMode: boolean, setPlayMode: React.Dispatch<React.SetStateAction<boolean>>, isGameStarted: boolean, setGameStarted: React.Dispatch<React.SetStateAction<boolean>> }):JSX.Element {

  function switcherHandler() {
    setPlayMode(!isPlayMode);
    const STARS = document.querySelectorAll('.star');
    STARS.forEach(item => item.remove());

    if (!isPlayMode === false) {
      setGameStarted(false);
    }
  }


  return (
    <div className={ isPlayMode ? 'switch-container play-mode' : 'switch-container' } >
      <label className={ !isPlayMode ?  'switch-text switch-active' : 'switch-text' } id="switch-train">train</label>
      <label className='switch'>
        <input type="checkbox" className='switch-input' onChange={() => switcherHandler()} />
        <span className={ isPlayMode ? 'switch-slider play-mode' : 'switch-slider' }></span>
      </label>
      <label className={ isPlayMode ?  'switch-text switch-active' : 'switch-text' } id="switch-play">play</label>
    </div>
  );
}

export default Switcher;
