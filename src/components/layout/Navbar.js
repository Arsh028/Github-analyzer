import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props)
{  
    return (
        //TODO - Add Link to home page
        <nav className="navbar bg-primary">
            <h2>
                <i className = {props.icon}></i>
                {props.title}
            </h2>
        </nav>
    )
}
 //default values of the component
Navbar.defaultProps = {
    title : "Github Finder",
    icon : "fab fa-github"
};

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
};

export default Navbar
