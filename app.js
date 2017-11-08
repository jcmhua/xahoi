import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "./Components/Main"

export function App(){
  return
  <BrowserRouter>
      <Switch>
          <Route exact path ="/" component={Main} />
      </Switch>
  </BrowserRouter>

}
