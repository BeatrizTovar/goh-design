import React from 'react'
import {withRouter} from 'react-router-dom'


class Polaroids extends React.Component {
    
    handle

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className='goh_inner'></div>
                    <span className='goh_inner_text'>Sample</span>
                </div>
                <div>
                    <div className='goh_inner'>  </div>
                    <span className='goh_inner_text'>Sample</span>
                </div>
                <div>
                    <div className='goh_inner'> </div>
                    <span className='goh_inner_text'>Sample</span>
                </div>
                <div>
                    <div className='goh_inner'>  </div>
                    <span className='goh_inner_text'>Sample</span>
                </div>
                <div>
                    <div className='goh_inner'>  </div>
                    <span className='goh_inner_text'>Sample</span>
                </div>
                <div>
                    <div className='goh_inner'>  </div>
                    <span className='goh_inner_text' onClick={e => this.props.history.push('/contact')}>Sample</span>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Polaroids);