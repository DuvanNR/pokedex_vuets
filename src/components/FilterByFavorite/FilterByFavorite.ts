import { defineComponent } from 'vue';
import { usePokemonStore } from '@/composables/usePokemonStore';

export default defineComponent({
    name: 'FilterByFavorite',
    setup() {
        const { listFavoritePokemons, initListPokemos } = usePokemonStore();

        const filterByFavorite = (isFilterFavorite: boolean, event: any) => {
            (isFilterFavorite) ? listFavoritePokemons() : initListPokemos();
        }

        return{
           filterByFavorite
        }
    },
});