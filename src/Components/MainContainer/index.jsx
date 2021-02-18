import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/styles.scss';

const Favorites = lazy(() => import('./views/Favorites'));
const Peoples = lazy(() => import('./views/Peoples'));
const SideBar = lazy(() => import('./views/SideBar'));

const MainContainer = () => {
  return (
    <section className="mainContainer">
      <div className="content">
        <Switch>
          <Route exact path="/people-list" component={Peoples} />
          <Route exact path="/favorites-list" component={Favorites} />
        </Switch>
      </div>

      <SideBar />
    </section>
  );
};

export default MainContainer;
