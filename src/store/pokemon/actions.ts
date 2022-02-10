import { ActionTree } from 'vuex';
import { PokemonState } from './state';
import { StateInterface } from '../index';
import { PokemonResponse } from '@/interfaces/pokemon';
import { ListPokemosResponse } from '@/interfaces/listPokemons';
import pokemonApi from '@/apis/pokemonApi';


const actions: ActionTree<PokemonState, StateInterface> = {

    async getPokemons({dispatch, commit },  params?) {
        try {

          // validar si es undefined
          const { name, isCard } = (!params || !params.name) ? { name: '', isCard: false } : params;

          // Se realizar la petición a segun el módula, ya que podemos pasar la interfaz y fortalecer el tipado.
          const listData = (!name) ? await dispatch('getRequestAll')
                                   : await dispatch('getRequestName', { name, isCard });

          (isCard) ? commit('setPokemonCard', listData) : commit('setPokemons', listData);

        } catch (ex) {
          console.error('Error Try-Request', ex);
          commit('setPokemonCard', []);
          commit('setPokemons', []);
        }
    },

    async getRequestAll() {
        const response =  await pokemonApi.get<ListPokemosResponse>(`/`)
        const data = response.data;
        return data.results;
    },

    async getRequestName({ commit }, params?) {

      const { name, isCard } = (!params || !params.name) ? { name: '', isCard: false } : params;

      const response =  await pokemonApi.get<PokemonResponse>(`/${ name }`)
      const data = response.data;
      console.log('sdsdsd', response.status);
      const listData = [{ 
                          name: data.name,
                          height: data.height,
                          weight: data.weight,
                          types: data.types.map((type => type.type.name)),
                          sprites: data.sprites.other?.['official-artwork'].front_default,
                        }];
      return listData;
    },

    getFavoritePokemons({ commit }) {
        const listFavoriteLocal = JSON.parse( localStorage.getItem('favoritesPokemonsLocal')! );
        const setListFavorite = listFavoriteLocal.reduce(function(target: any, key: string, index: number) {
            target[index] = {name: key};
            return target;
        }, []);
        
        (listFavoriteLocal.length > 0) ? commit('setPokemons', setListFavorite) : commit('setPokemons', []);
    },


}


export default actions;