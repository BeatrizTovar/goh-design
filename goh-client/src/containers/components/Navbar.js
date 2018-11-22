import React from 'react'
import {Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import {withRouter, NavLink} from 'react-router-dom'

class NavbarTop extends React.Component {
    render () {        
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <nav className='goh_navbar'>
                        <NavLink to='/' className='goh_text'>G O H</NavLink>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(NavbarTop);