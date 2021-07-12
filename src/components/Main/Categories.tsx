import React from "react";
import { Link } from 'react-router-dom';
import './Main.scss';

function Categories({ items, isPlayMode}: {items: {name: string, href: string, image: string, id: number}[], isPlayMode: boolean}): JSX.Element {

  return (
    <div className={isPlayMode ? 'container play-mode' : 'container'}>
      <div className='container-inner'>
        <ul className='categories-list'>
          {items.map(item =>
            <li className='categories-item' key={item.id}>
              <Link className='categories-link' to={item.href}>
                <div className='categories-image-wrapper'>
                  <img className='categories-image' src={item.image} alt={item.name}></img>
                </div>
                <div className='categories-content'>{item.name}</div>
              </Link>
            </li>
            )}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
