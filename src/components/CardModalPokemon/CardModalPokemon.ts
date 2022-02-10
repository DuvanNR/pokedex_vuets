import { defineComponent, ref, onMounted } from 'vue';
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { usePokemonStore } from '../../composables/usePokemonStore';

export default defineComponent({
    name: 'CardModalPokemon',
    props: {
        isOpenModal:{
            type: Boolean,
            default: false
        },
        name: String
    },
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
    },

    setup(props) {
        const { searchPokemon, pokemonCard, getLocalStorage } = usePokemonStore();
        const open = ref(props.isOpenModal);
        const favoritesSaved = getLocalStorage();
        const namePokemon = (!props.name) ? '' : props.name;

        const copyClipboard = (infoPokemon: any) => {
            const copyPokemon = JSON.stringify(infoPokemon[0]);
            navigator.clipboard.writeText(copyPokemon).then(() => {
              console.log('Success Copy');
            }, () => {
              console.log('Failed Copy');
            });
        }

        onMounted( () => {
            searchPokemon(namePokemon, true);
        });

        return{
            open,
            pokemonCard,
            favoritesSaved,
            nameTemp: props.name,
            copyClipboard
        }
    },
});


