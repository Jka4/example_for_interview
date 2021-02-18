import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../styles/App.scss';

import HeaderLine from '@Components/HeaderLine';

const HelloPage = lazy(() => import('./HelloPage'));
const MainContainer = lazy(() => import('@Components/MainContainer'));
const DetailedPage = lazy(() => import('@Components/DetailedPage'));
const ErrorPage = lazy(() => import('@Components/ErrorPage'));

const App = () => {
  return (
    <Suspense fallback={<div className="fallback">Loading...</div>}>
      <div className="App ">
        <HeaderLine />

        <Switch>
          <Route exact path="/" component={HelloPage} />
          <Route path={['/people-list', '/favorites-list']} component={MainContainer} />
          <Route path="/detailedPage" component={DetailedPage} />
          <Route path="/404" component={ErrorPage} />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
    </Suspense>
  );
};

export default App;
