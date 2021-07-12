import React, { useState } from 'react';
import './Header.scss';
import Menu from './Menu';
import Switcher from './Switcher';
import Burger from './Burger';

function Header({ isPlayMode, setPlayMode, isGameStarted, setGameStarted }: {isPlayMode: boolean, setPlayMode: React.Dispatch<React.SetStateAction<boolean>>, isGameStarted: boolean, setGameStarted: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  const [menuActive, setMenuActive] = useState(false);

  const initialPath = '/menu/';
  const items = [
    {name: 'Main page', href: '/', image: `${initialPath}main.png`, id: 1},
    {name: 'Action (Set A)', href: '/category-1', image: `${initialPath}action1.png`, id: 2},
    {name: 'Action (Set B)', href: '/category-2', image: `${initialPath}action2.png`, id: 3},
    {name: 'Animal (Set A)', href: '/category-3', image: `${initialPath}animal1.png`, id: 4},
    {name: 'Animal (Set B)', href: '/category-4', image: `${initialPath}animal2.png`, id: 5},
    {name: 'Clothes', href: '/category-5', image: `${initialPath}clothes.png`, id: 6},
    {name: 'Emotions', href: '/category-6', image: `${initialPath}emotions.png`, id: 7},
    {name: 'Food', href: '/category-7', image: `${initialPath}food.png`, id: 8},
    {name: 'Travelling', href: '/category-8', image: `${initialPath}travelling.png`, id: 9}
  ]

  return(
    <header className='header'>
      <div className='nav'>
        <Burger active={menuActive} setActive={setMenuActive} />
        <Menu isPlayMode={isPlayMode} active={menuActive} setActive={setMenuActive} items={items} />
      </div>
      <Switcher isPlayMode={isPlayMode} setPlayMode={setPlayMode} isGameStarted={isGameStarted} setGameStarted={setGameStarted}/>
    </header>
  );
}

export default Header;
