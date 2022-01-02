import React, { useState } from 'react';
import Spiner from './Spiner';
import Cards from './Cards';
import Search from './Search';
import Classes from './Card.module.css'

function CarLoader({ isLoading, pokemons }) {

    const [search, setSearch] = useState('');

    return isLoading ? (
        <Spiner />
    ) : (
        <div>
            <Search onSearch={setSearch} value={search} />
            <div className={Classes.poke_container}>
                {pokemons.filter(pokemon => pokemon.name.includes(search)).map(pokemon => <Cards pokemon={pokemon}/>)}
            </div>
        </div>
    )
}

export default CarLoader;