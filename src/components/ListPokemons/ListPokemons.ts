import { defineComponent, ref, watchEffect } from 'vue';
import { usePokemonStore } from '@/composables/usePokemonStore';
import CardModalPokemon  from '@/components/CardModalPokemon/CardModalPokemon.vue';

export default defineComponent({
    name: 'ListPokemon',
    components:{
        CardModalPokemon
    },
    setup() {
        const { listPokemons, getLocalStorage, saveLocalStorage } = usePokemonStore();
        const favoritesSaved = getLocalStorage();
        const stateModal = ref<boolean>(false);
        const modalKey = ref<number>(0);
        const namePokmeon = ref('');


        // const inst = getCurrentInstance();

        const openModal = (name: string) => {
            namePokmeon.value = name;
            stateModal.value = true;
            modalKey.value++;
        }

        const markFavorite = (name: string, event: any) => {
            const target = event.target;
            const favorite = ( name );
            if(target.parentElement.tagName === 'svg')
                    (target.parentElement.classList.contains('activeStar'))
                        ? favoritesSaved.splice( favoritesSaved.indexOf(favorite), 1)
                        : favoritesSaved.push(favorite);

                target.parentElement.classList.toggle('activeStar');
                saveLocalStorage(favoritesSaved);
        }

        watchEffect(() => modalKey.value);

        return{
            listPokemons,
            markFavorite,
            favoritesSaved,
            stateModal,
            openModal,
            modalKey,
            namePokmeon
        }
    },
});