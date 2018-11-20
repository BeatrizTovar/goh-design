import React from 'react';
import * as contactService from '../service/contactService'; 
import { Table, Button } from 'react-bootstrap';

class ContactList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.deleteEntry = this.deleteEntry.bind(this);
        this.editEntry = this.editEntry.bind(this);
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        const promise = contactService.readAll()
        promise
            .then(response => {
                this.setState({
                    list: response.items
                })
                console.log(response)
            })
            .catch(console.error)
        return promise;
    }

    deleteEntry(e, entryId) {
        const promise = contactService.del(entryId)
        promise
            .then(response => {
                this.getList();
                console.log(response)
            })
            .catch(console.error)
    }

    editEntry(e, entryId) {
        this.props.history.push('/contact/'+ entryId);
    }
    render() {
        const formattedList = this.state.list 
            ? this.state.list.map(item => {
                return (
                <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.event}</td>
                <td><Button onClick={e => this.deleteEntry(e, item.id)}>delete</Button></td> 
                <td><Button onClick={e => this.editEntry(e, item.id)}>edit</Button></td> 
                </tr>
                )
            })
            : null

            //button styling: background-clor: unset, color: red

        return(
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <Table hover condensed>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Event</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formattedList}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactList;