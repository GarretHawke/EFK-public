import React, { useState } from 'react';
import './Header.scss';
import Menu from './Menu';
import Switcher from './Switcher';
import Burger from './Burger';

function Header(): JSX.Element {
  const [menuActive, setMenuActive] = useState(false);
  const [trainActive, setTrainActive] = useState(true);
  const items = [
    {name: 'Main page', href: '/', image: './menu/main-icon.png', id: 1},
    {name: 'Action (Set A)', href: '/category-1', image: './menu/action1-icon.png', id: 2},
    {name: 'Action (Set B)', href: '/category-2', image: './menu/action2-icon.png', id: 3},
    {name: 'Animal (Set A)', href: '/category-3', image: './menu/animal1-icon.png', id: 4},
    {name: 'Animal (Set B)', href: '/category-4', image: './menu/animal2-icon.png', id: 5},
    {name: 'Clothes', href: '/category-5', image: './menu/clothes-icon.png', id: 6},
    {name: 'Emotions', href: '/category-6', image: './menu/emotions-icon.png', id: 7},
    {name: 'Food', href: '/category-7', image: './menu/food-icon.png', id: 8},
    {name: 'Travelling', href: '/category-8', image: './menu/travelling-icon.png', id: 9}
  ]

  return(
    <header className='header'>
      <div className='nav'>
        <Burger active={menuActive} setActive={setMenuActive} />
        <Menu trainActive={trainActive} setTrainActive={setTrainActive} active={menuActive} setActive={setMenuActive} items={items} />
      </div>
      <Switcher active={trainActive} setTrainActive={setTrainActive} />
    </header>
  );
}

export default Header;
