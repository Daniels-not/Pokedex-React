import React from 'react';
import Classes from './Header.module.css';

function Header(props) {
    return (
        <div>
            <h1 className={Classes.title}>Pokemon API</h1>
        </div>
    );
}

export default Header;