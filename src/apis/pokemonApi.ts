import axios from 'axios';

// Se centraliza el Api, en caso que sea necesario agrandar los recurso y configurar parámetro
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export default pokemonApi;