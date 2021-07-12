import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function MenuItem({ item, active, setActive}: {item: {name: string, href: string, image: string, id: number}, active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  let [isActiveRoute, setActiveRoute] = useState(false);


  useEffect(() => {

  })

  function clickHandler() {
    const LINKS = document.querySelectorAll('.nav-link');
    LINKS.forEach(item => item.classList.remove('active-route'));
    isActiveRoute = true;
    setActiveRoute(isActiveRoute);
  }

  return (
    <li className='nav-item' key={item.id} onClick={() => {setActive(false)}}>
      <Link className={isActiveRoute === true ? 'nav-link active-route' : 'nav-link'} to={item.href} onClick={clickHandler }>
        <img className='icon' src={item.image}></img>{item.name}
      </Link>
    </li>
  );
}

export default MenuItem;
