import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, ButtonToolbar } from 'react-bootstrap'

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

<ButtonToolbar>
  {/* Standard button */}
  <Button>Default</Button>

  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary">Primary</Button>

  {/* Indicates a successful or positive action */}
  <Button bsStyle="success">Success</Button>

  {/* Contextual button for informational alert messages */}
  <Button bsStyle="info">Info</Button>

  {/* Indicates caution should be taken with this action */}
  <Button bsStyle="warning">Warning</Button>

  {/* Indicates a dangerous or potentially negative action */}
  <Button bsStyle="danger">Danger</Button>

  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
  <Button bsStyle="link">Link</Button>
</ButtonToolbar>;


      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;