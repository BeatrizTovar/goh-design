import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/components/Home";
import NavbarTop from '../src/containers/components/Navbar'
import './App.css'
import Contact from '../src/containers/components/Contact'
import ContentRouter from "./containers/components/ContentRouter";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <NavbarTop />
        <Router>
          <ContentRouter />
        </Router>
      </React.Fragment>
    )
  }
}

export default App;    // <div className='App'>
// <NavbarTop/>
// <div className='App-header'>
// <Contact />
// </div>

// </div>