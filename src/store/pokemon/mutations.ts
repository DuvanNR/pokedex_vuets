import { MutationTree } from 'vuex';
import { PokemonState } from './state';


const mutation: MutationTree<PokemonState> = {
    setPokemons(state, payload) {
        state.pokemons = payload;
    },
    setPokemonCard(state, payload) {
        state.pokemonCard = payload;
    }
}


export default mutation;