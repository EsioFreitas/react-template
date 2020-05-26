import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Tmp from './Pages/Tmp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/tmp" component={Tmp} />
      </Switch>
    </BrowserRouter>
  );
}
