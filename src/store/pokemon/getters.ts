import { GetterTree } from 'vuex';
import { PokemonState } from './state';
import { StateInterface } from '../index';
import { computed } from 'vue';


const getters: GetterTree<PokemonState, StateInterface> = {

    getListPokemons(  state  ) {
        const pokemons = computed(() => {
            return state.pokemons
          });

        return pokemons;
    },
    getPokemonCard(  state  ) {
        const pokemonCard = computed(() => {
            return state.pokemonCard
          });

        return pokemonCard;
    },

}



export default getters;