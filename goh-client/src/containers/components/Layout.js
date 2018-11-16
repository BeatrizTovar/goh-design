import React from 'react';
import Navbar from '../components/Navbar';
import ContentRouter from '../components/ContentRouter';

class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <ContentRouter/>
            </React.Fragment>
        )
    }
}

export default Layout;