import { defineComponent } from 'vue';
import { ref } from 'vue'
import { usePokemonStore } from '@/composables/usePokemonStore';

export default defineComponent({
    name: 'FilterByName',
    setup() {
        const { searchPokemon } = usePokemonStore();
        const name = ref<string>('');

        const filter = () => {
            searchPokemon(name.value);
        }

        return{
            name,
            filter
        }
    },
});