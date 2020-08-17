import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import RandomUploader from './pages/randomUploader'
import Post from './pages/post'
import PostForm from './pages/postForm'
import NotFound from './pages/notFound'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/random-uploader" component={RandomUploader} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/post/create" component={PostForm} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
