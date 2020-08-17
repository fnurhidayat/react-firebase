import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import RandomUploader from './pages/randomUploader'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/random-uploader" component={RandomUploader} />
    </Switch>
  </BrowserRouter>
)

export default Router
