import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { APP_PATHNAME } from 'utils/constants'
import App from './App'
import Home from 'views/home'
import Web from 'views/web'


const Routes = () => (
  <Switch>
      <App path="/">
        <Route exact path={APP_PATHNAME.HOME.path}>
          <Home />
        </Route>
        <Route path={APP_PATHNAME.WEB.path}>
          <Web />
        </Route>
      </App>
  </Switch>
)

export default Routes
