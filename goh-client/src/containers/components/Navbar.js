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

                    {/* <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navItems'
                        aria-controls='navItems' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navItems'>
                        <div className='navbar-nav'>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/contact-list'>Contact Us</NavLink>
                        </div>
                    </div> */}
                </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(NavbarTop);