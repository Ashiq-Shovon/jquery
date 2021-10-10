
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact  component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          </Switch>
        <Footer />
      </Router>
    </>
  )
}


export default App

