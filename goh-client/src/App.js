import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarTop from '../src/containers/components/Navbar'
import './App.css'
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

export default App;
