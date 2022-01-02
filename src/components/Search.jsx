import React from 'react';
import Classes from './Search.module.css';

function Search(props) {

    return (
        <div className={Classes.search_container}>
            <div className={Classes.input_container}>
                <input className={Classes.input__inner} name="my_pokemon" type="text" placeholder="Search pokemon by name" onChange={(e) => props.onSearch(e.target.value)} value={props.value} />
                <span class="input__border"></span>
            </div>
        </div>
    );
}

export default Search;