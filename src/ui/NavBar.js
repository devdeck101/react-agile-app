import React from 'react';
import {Link} from 'react-router';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/' className="navbar-brand">{props.logo}</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/releases' className="nav-link">Releases</Link>
                       
                    </li>
                    <li className="nav-item">
                        <Link to='/backlog' className="nav-link">Backlog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/sprints' className="nav-link">Sprints</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;