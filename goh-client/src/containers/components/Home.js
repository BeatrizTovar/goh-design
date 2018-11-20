import React from 'react';
import Polaroids from './Polaroids';

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="home_container">
                    <Polaroids />
                </div>
            </React.Fragment>
        )
    }
}

export default Home;