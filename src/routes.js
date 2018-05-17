import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/home/Home';
import Auth from './components/Auth';
import Library from './components/Library';
import SConnect from './components/social/SConnect';
import SLibrary from './components/social/SLibrary';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />>
        <Route path="/auth" component={Auth} />>
        <Route path="/library" component={Library} />>
        <Route path="/s/:sName/connect" component={SConnect} />>
        <Route path="/s/:sName/library" component={SLibrary} />>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
