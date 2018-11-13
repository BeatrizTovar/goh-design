import React from 'react'

class NavbarTop extends React.Component {
    render () {
        return (
            <React.Fragment>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                    <a className='navbar-brand' href='/'>Home</a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navItems'
                        aria-controls='navItems' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navItems'>
                        <div className='navbar-nav'>
                        <a className='nav-item nav-link active' href='/'>One <span className='sr-only'>(current)</span></a>
                        <a className='nav-item nav-link' href='/'>Two</a>
                        <a className='nav-item nav-link' href='/contact'>Contact Us</a>
                        {/* <a className='nav-item nav-link disabled' href='/'>Disabled Link</a> */}
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavbarTop;