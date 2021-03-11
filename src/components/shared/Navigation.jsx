import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
       
            <ul className="nav nav-pills justify-content-center">
                <li class="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item active">
                    <Link className="nav-link" to="/about">About</Link>                   
                </li>
                <li class="nav-item active">
                    <Link className="nav-link" to="/categories">List of bestsellers categories</Link>
                </li>

            </ul>
       
     );
}
 
export default Navigation;  