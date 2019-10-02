import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
class Navbar extends Component{
    render(){
        const dogLink = this.props.dogs.map(idx =>(
            <li className='nav-item' key={idx.name}>
            <NavLink exact to={`/dogs/${idx.name}`} className='nav-link' key={idx.name}>{idx.name}</NavLink>
            </li>
)
)
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/dogs">Dog shelter</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item " key='Home'>
                                <NavLink className="nav-link"  exact to='/dogs'>Home </NavLink>
                            </li>
                            {dogLink}
                        </ul>
                </div>
                </nav>
            </div>

                        
                        
               
             
        );
    }
}
export default Navbar;