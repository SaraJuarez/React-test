import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


function Header() {

    return (
        <header className='App__header'>
            <h1 className='App__header--title'>Test App eB2</h1>
            <nav className='App__header--nav-ul'>
                <ul>
                    <li>
                        <Link className='App__header--link' to='/'>Home</Link>

                    </li>
                </ul>
            </nav>


        </header>
    )
}

export default Header;