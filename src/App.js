import React from 'react';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import './App.css'
import Information from './Information'
import Worldwide from './Worldwide'
import Nav from './Nav'
import Footer from './Footer'
import USA from './USA'


function App() {


  return (
    <Router>
      <div style={{minHeight:"calc(100vh - 64px)"}}>
      <Nav />
    <Switch>
      <Route path="/Learn" component={Information}/>
      <Route path="/USA" component={USA}/>
      <Route exact path="/" component={Worldwide}/>
    </Switch>
    </div>
    <Footer/>
    </Router>
  )

}

export default App;
