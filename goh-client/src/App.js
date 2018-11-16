import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Layout from '../src/containers/components/Layout'
import 'typeface-spicy-rice'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Layout/>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
