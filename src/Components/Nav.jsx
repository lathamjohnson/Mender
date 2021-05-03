import { React, useState } from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    const [style, setStyle] = useState({display: 'none'})

    return (
        <nav>
            <Link className="link" to="/favorites">Favorites</Link>
            <Link className="link" to="/about">About</Link>
            <span className="icon">&#9836;</span>
        </nav>
    );
}

export default Nav;