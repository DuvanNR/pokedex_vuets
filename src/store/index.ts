import { createStore } from 'vuex';

// My custom modules
import pokemonModule from './pokemon';
import { PokemonState } from './pokemon/state';

export interface StateInterface {
  pokemon: PokemonState
}

export default createStore<StateInterface>({
  modules: {
    pokemon: pokemonModule
  }
})