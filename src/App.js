import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './components/homepage/homepage'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Blog from './components/blog/blog'
import Article from './components/article/article'

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/blog/article/:article' component={Article} />
    </Switch>
  </BrowserRouter>
)
function App() {
  return (
    <React.Fragment>
      <Header />
      <Root />
      <Footer />
    </React.Fragment>
  );
}

export default App;
