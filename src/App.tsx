import React, { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import './App.scss';
import { Category1, Category2, Category3, Category4, Category5, Category6, Category7, Category8 } from '@/components/Categories';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(): JSX.Element {
  const pages = [
    {path: '/', component: Main, id: 0},
    {path: '/category-1', component: Category1, id: 1},
    {path: '/category-2', component: Category2, id: 2},
    {path: '/category-3', component: Category3, id: 3},
    {path: '/category-4', component: Category4, id: 4},
    {path: '/category-5', component: Category5, id: 5},
    {path: '/category-6', component: Category6, id: 6},
    {path: '/category-7', component: Category7, id: 7},
    {path: '/category-8', component: Category8, id: 8},
  ]
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          {pages.map(page =>
            <Route exact path={page.path} component={page.component} key={page.id} />
            )}
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
