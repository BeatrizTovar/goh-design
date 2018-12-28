import React from 'react';
import Polaroids from './Polaroids';
import MailingList from './MailingList';

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="home_container">
                    <Polaroids />
                </div>
                <div>
                    {/* <MailingList /> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Home;