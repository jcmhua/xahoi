import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { App } from './Components/App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}


render(App)

//Hot Module Replacement API / React-hot-loader API
if (module.hot) {
   module.hot.accept('./Components/App.js', () => { render(App) })
 }
