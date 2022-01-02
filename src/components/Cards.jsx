import React from 'react';
import Classes from './Card.module.css';

function Cards({ pokemon }) {
    return (
        <div className={Classes.pokemon}>
        <div className={Classes.img_container}>
            <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} />
        </div>
            <div className={Classes.info}>
                {/* <span className={Classes.number}>--</span> */}
                <h3 className={Classes.name}>{pokemon.name}</h3>
                {/* <small className={Classes.type}>Type: <span></span></small> */}
            </div>
        </div>
    );
}

export default Cards;