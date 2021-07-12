import React, { Component, Fragment, useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Category from '@/components/Categories';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import items from '@/components/Categories/ArrayOfCategories';

function App(): JSX.Element {
  const [isPlayMode, setPlayMode] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);
  const [isEndGame, setEndGame] = useState(false);
  let [arrayOfAnswers, setAnswers] = useState([]);


  //Category1
  const newArray1 = items[0];
  //const newArraySliced1 = newArray1.concat().sort(() => Math.random() - 0.5);
  //localStorage.setItem('sounds', JSON.stringify(newArraySliced1));
  //const newArrayRandomized1 = newArraySliced1.sort(() => Math.random() - 0.5);
  //const newAudioArray1 = newArrayRandomized1.concat();
  //const newAudioArrayRandomized1 = newAudioArray1.sort(() => Math.random() - 0.5);

  //Category2
  const newArray2 = items[1];
  /* const newArraySliced2 = newArray2.concat();
  const newArrayRandomized2 = newArraySliced2.sort(() => Math.random() - 0.5);
  const newAudioArray2 = newArrayRandomized2.concat();
  const newAudioArrayRandomized2 = newAudioArray2.sort(() => Math.random() - 0.5); */

  //Category3
  const newArray3 = items[2];
 /*  const newArraySliced3 = newArray3.concat();
  const newArrayRandomized3 = newArraySliced3.sort(() => Math.random() - 0.5);
  const newAudioArray3 = newArrayRandomized3.concat();
  const newAudioArrayRandomized3 = newAudioArray3.sort(() => Math.random() - 0.5); */

  //Category4
  const newArray4 = items[3];
  /* const newArraySliced4 = newArray4.concat();
  const newArrayRandomized4 = newArraySliced4.sort(() => Math.random() - 0.5);
  const newAudioArray4 = newArrayRandomized4.concat();
  const newAudioArrayRandomized4 = newAudioArray4.sort(() => Math.random() - 0.5); */

  //Category5
  const newArray5 = items[4];
  /* const newArraySliced5 = newArray5.concat();
  const newArrayRandomized5 = newArraySliced5.sort(() => Math.random() - 0.5);
  const newAudioArray5 = newArrayRandomized5.concat();
  const newAudioArrayRandomized5 = newAudioArray5.sort(() => Math.random() - 0.5); */

  //Category6
  const newArray6 = items[5];
  /* const newArraySliced6 = newArray6.concat();
  const newArrayRandomized6 = newArraySliced6.sort(() => Math.random() - 0.5);
  const newAudioArray6 = newArrayRandomized6.concat();
  const newAudioArrayRandomized6 = newAudioArray6.sort(() => Math.random() - 0.5); */

  //Category7
  const newArray7 = items[6];
  /* const newArraySliced7 = newArray7.concat();
  const newArrayRandomized7 = newArraySliced7.sort(() => Math.random() - 0.5);
  const newAudioArray7 = newArrayRandomized7.concat();
  const newAudioArrayRandomized7 = newAudioArray7.sort(() => Math.random() - 0.5); */

  //Category8
  const newArray8 = items[7];
  /* const newArraySliced8 = newArray8.concat();
  const newArrayRandomized8 = newArraySliced8.sort(() => Math.random() - 0.5);
  const newAudioArray8 = newArrayRandomized8.concat();
  const newAudioArrayRandomized8 = newAudioArray8.sort(() => Math.random() - 0.5); */


  const pages = [
    {path: '/', component: <Main isPlayMode={isPlayMode} />, id: 0},
    {path: '/category-1', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray1} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 1},
    {path: '/category-2', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray2} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 2},
    {path: '/category-3', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray3} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 3},
    {path: '/category-4', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray4} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 4},
    {path: '/category-5', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray5} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 5},
    {path: '/category-6', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray6} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 6},
    {path: '/category-7', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray7} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 7},
    {path: '/category-8', component: <Category isPlayMode={isPlayMode} setPlayMode={setPlayMode} cardItems={newArray8} isGameStarted={isGameStarted} setGameStarted={setGameStarted} isEndGame={isEndGame} setEndGame={setEndGame} arrayOfAnswers={arrayOfAnswers} setAnswers={setAnswers} />, id: 8},

  ]

  return (
    <Fragment>
      <Router>
        <Header isPlayMode={isPlayMode} setPlayMode={setPlayMode} isGameStarted={isGameStarted} setGameStarted={setGameStarted}  />
        <Switch>
          {pages.map(page =>
            <Route exact path={page.path} key={page.id} >
              {page.component}
            </Route>
            )}
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
