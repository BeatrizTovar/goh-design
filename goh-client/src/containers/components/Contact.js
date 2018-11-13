import React from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import * as contactService from '../service/contactService'

class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            event:'',
            edit: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if(id) {
            contactService.readById(id)
                .then(response => {
                    this.setState({
                        firstName: response.item.firstName,
                        lastName: response.item.lastName,
                        email: response.item.email,
                        phone: parseInt(response.item.phone),
                        event: response.item.event,
                        edit: true
                    })
                    console.log(response)
                })
                .catch(console.error)
        }
    }

    onSubmit() {
        const formData = this.state;
        const id = this.props.match.params.id;
        let promise ={}

        if( id && this.state.edit) {
            promise = contactService.update(id, formData)
        }
        else {
            promise = contactService.create(formData)
        }
        promise
            .then(response => {
                this.formReset()
                this.props.history.goBack();
                console.log(response)
            })
            .catch(console.error)
    }

    formReset() {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            event:'',
            edit: false
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* {console.log(this.props.history.goBack)} */}
                <div className='container'>
                <div className='row'>
                <div className='col-sm-8'>
                <span>CONTACT US</span><br/><br/>
                </div>
                    </div>
                    <div className='row'>
                    <div className='col-sm-4'>
                        <Form>
                            <FormGroup className='float-left' controlId="firstName">
                                <ControlLabel>First Name </ControlLabel>&nbsp;
                            <FormControl type="text" placeholder="First" name='firstName' value={this.state.firstName} onChange={this.onChange} />
                            </FormGroup>
                        </Form>
                    </div>
                    
                    <div className='col-sm-4'>
                    <Form>
                            <FormGroup className='float-right' controlId="formInlineEmail">
                                <ControlLabel>Last Name </ControlLabel>&nbsp;
                            <FormControl type="text" placeholder="Last" name='lastName' value={this.state.lastName} onChange={this.onChange} />
                            </FormGroup>
                            </Form>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='col-sm-8'>
                        <Form >
                            <FormGroup controlId="email">
                                <ControlLabel>Email </ControlLabel>&nbsp;
                            <FormControl type="email" placeholder="jane.doe@example.com" name='email' value={this.state.email} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup controlId="phone">
                                <ControlLabel>Phone </ControlLabel>&nbsp;
                            <FormControl type="text" placeholder="ex. 1234567890" name='phone' value={this.state.phone} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup controlId="event">
                                <ControlLabel>Event </ControlLabel>&nbsp;
                            <FormControl type="text" placeholder="ex. Coachella" name='event' value={this.state.event} onChange={this.onChange} />
                            </FormGroup>
                            {/* <div className='col-sm-8'> */}
                                <Button style={{display: 'inlineBlock' }}className='btn btn-dark float-right' type='button' onClick={this.onSubmit}>
                                {this.state.edit ? 'Edit' : 'Submit'}</Button>
                            {/* </div> */}
                        </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;