import React, { useState } from "react";
import { Link } from 'react-router-dom';

function MenuItem({ item, active, setActive}: {item: {name: string, href: string, image: string, id: number}, active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element {
  const [isActiveRoute, setActiveRoute] = useState(false);

  return (
    <li className='nav-item' key={item.id} onClick={() => {setActive(false)}}>
      <Link className={isActiveRoute ? 'nav-link active-route' : 'nav-link'} to={item.href} onClick={(event) => {
        document.querySelectorAll('.active-route').forEach(element => element.classList.remove('active-route'));
        setActiveRoute(true);
        }}>
        <img className='icon' src={item.image}></img>{item.name}
      </Link>
    </li>
  );
}

export default MenuItem;
