import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MenuItem from "./MenuItem";

function Menu({ items, active, setActive, trainActive, setTrainActive }: {items: {name: string, href: string, image: string, id: number}[], active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>, trainActive: boolean, setTrainActive: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {

  return (
    <nav className='nav-container' onClick={() => setActive(false)}>
      <ul className={ trainActive ? (active ? 'nav-list nav-active' : 'nav-list') : (active ? 'nav-list nav-active play-mode' : 'nav-list play-mode') } onClick={event => event.stopPropagation()}>
        {items.map(item =>
          <MenuItem item={item} active={active} setActive={setActive} key={item.id}  />)}
      </ul>
      <div className='nav-overlay'></div>
    </nav>
  );
}

export default Menu;
