import { defineComponent, ref } from 'vue';
import { usePokemonStore } from '@/composables/usePokemonStore';

export default defineComponent({
    name: 'FilterByFavorite',
    setup() {
        const { listFavoritePokemons, initListPokemos } = usePokemonStore();
        const btnActiveFavorite = ref(false);
        

        const filterByFavorite = (isFilterFavorite: boolean, event: any) => {
            btnActiveFavorite.value = isFilterFavorite;
            (isFilterFavorite) ? listFavoritePokemons() : initListPokemos();
        }

        return{
           filterByFavorite,
           btnActiveFavorite
        }
    },
});