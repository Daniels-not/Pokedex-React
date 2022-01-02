import axios from 'axios';

const URL = 'https://app.pokemon-api.xyz/pokemon/random';

export const getRamdomPokemon = () => {
    return axios.get(URL);
};