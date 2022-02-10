import { useStore } from "vuex"
import { StateInterface } from '@/store/index';

export const usePokemonStore = () => {

    const store = useStore<StateInterface>();

    //iniciar lista pokemones
    const initListPokemos = () => store.dispatch('pokemon/getPokemons');

    //Filtar pokemones por nombre
    const searchPokemon = (name = '', isCard = false) => {
        return store.dispatch('pokemon/getPokemons', { name, isCard });
    };

    //Almacenamiento local en el browser para mantener los favoritos aún si se cierra el browser
    const saveLocalStorage = (favorite: any) => localStorage.setItem('favoritesPokemonsLocal', JSON.stringify( favorite ) );

    const getLocalStorage = () => {
        return ( localStorage.getItem('favoritesPokemonsLocal') ) ? JSON.parse( localStorage.getItem('favoritesPokemonsLocal')! ) : [];
    }
    const listFavoritePokemons = () => store.dispatch('pokemon/getFavoritePokemons');


    return {
        initListPokemos,
        listPokemons:  store.getters['pokemon/getListPokemons'],
        pokemonCard:  store.getters['pokemon/getPokemonCard'],
        listFavoritePokemons,
        searchPokemon,
        saveLocalStorage,
        getLocalStorage
    }
}