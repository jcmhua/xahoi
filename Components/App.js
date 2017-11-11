import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'
import Start from "./Start"

export function App(){
  return
  <BrowserRouter>
      <Switch>
          <Route exact path ="/" component={Start} />
      </Switch>
  </BrowserRouter>

}
