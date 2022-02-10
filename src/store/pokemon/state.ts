export interface PokemonState {
    pokemons: [];
    pokemonCard: [];
}

function state(): PokemonState {
    return {
        pokemons: [],
        pokemonCard: [],
    }
}

export default state;