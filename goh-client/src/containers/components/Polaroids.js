import React from 'react'
import {withRouter} from 'react-router-dom'


class Polaroids extends React.Component {
    
    handle

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className='goh_inner'>1</div>
                    <span className='goh_inner_text'>Bio</span>
                </div>
                <div>
                    <div className='goh_inner'>2  </div>
                    <span className='goh_inner_text'>Collection</span>
                </div>
                <div>
                    <div className='goh_inner'>3 </div>
                    <span className='goh_inner_text'>Merch</span>
                </div>
                <div>
                    <div className='goh_inner'>4  </div>
                    <span className='goh_inner_text'>Live</span>
                </div>
                <div>
                    <div className='goh_inner'>5  </div>
                    <span className='goh_inner_text'>News</span>
                </div>
                <div>
                    <div className='goh_inner'>6  </div>
                    <span className='goh_inner_text' onClick={e => this.props.history.push('/contact')}>Contact Us</span>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Polaroids);