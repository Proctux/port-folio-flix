import React from 'react'
import { Switch } from 'react-router-dom'

import App from './App'
import Home from 'views/home'

const Routes = () => (
  <Switch>
    <App path="/">
      <Home path="/home" />
    </App>
  </Switch>
)

export default Routes
