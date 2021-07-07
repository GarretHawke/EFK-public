import React from "react";

function Switcher({ active, setTrainActive }: {active: boolean, setTrainActive: React.Dispatch<React.SetStateAction<boolean>>}):JSX.Element {
  return (
    <div className='switch-container'>
      <label className={ active ?  'switch-text switch-active' : 'switch-text' } id="switch-train">train</label>
      <label className='switch'>
        <input type="checkbox" className='switch-input' onClick={() => setTrainActive(!active)} />
        <span className='switch-slider'></span>
      </label>
      <label className={ !active ?  'switch-text switch-active' : 'switch-text' } id="switch-play">play</label>
    </div>
  );
}

export default Switcher;
