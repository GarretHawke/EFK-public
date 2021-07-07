import React, { useState } from "react";
import Categories from "./Categories";
import './Main.scss';

function Main(): JSX.Element {
  const items = [
    {name: 'Action (Set A)', href: '/category-1', image: './cards/action-a/dance.jpg', id: 1},
    {name: 'Action (Set B)', href: '/category-2', image: './cards/action-b/play.jpg', id: 2},
    {name: 'Animal (Set A)', href: '/category-3', image: './cards/animal-a/dog.jpg', id: 3},
    {name: 'Animal (Set B)', href: '/category-4', image: './cards/animal-b/lion.jpg', id: 4},
    {name: 'Clothes', href: '/category-5', image: './cards/clothes/coat.jpg', id: 5},
    {name: 'Emotions', href: '/category-6', image: './cards/emotions/laugh.jpg', id: 6},
    {name: 'Food', href: '/category-7', image: './cards/food/apple.jpg', id: 7},
    {name: 'Travelling', href: '/category-8', image: './cards/travelling/luggage.jpg', id: 8}
  ]

  return (
    <Categories items={items} />
  );
}

export default Main;

