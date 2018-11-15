import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ContactList from './ContactList';

class ContentRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/contact/:id?' component={Contact} />
                    <Route path='/contact-list' component={ContactList} />
                </Switch>
            </React.Fragment>

        )
    }
}

export default ContentRouter;