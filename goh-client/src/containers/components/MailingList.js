import React from  'react';
import { FormControl } from 'react-bootstrap'

class MailingList extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: ''
        }
        this.enterKey = this.enterKey.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    enterKey(e){
        if(e.key === 'Enter'){
            console.log(this.state.email)
            console.log(e)
        }
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <div className='mail'>
                <span className='goh_inner_text mail-text'>Join our mailing list.</span>
                <FormControl className='mail_email' type='email' placeholder='Enter email...' name='email' value={this.state.email} onChange={this.handleChange} onKeyPress={this.enterKey} />
                </div>
            </React.Fragment>
        )
    }
}

export default MailingList;