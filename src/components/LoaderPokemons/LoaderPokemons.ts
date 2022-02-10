import { defineComponent, onMounted, watchEffect, ref } from 'vue';
import { TransitionRoot } from '@headlessui/vue'

export default defineComponent({
    name: 'LoaderPokemon',
    components: { TransitionRoot },
    setup() {
        const isShowing = ref(true)
        const loadReady = ref(0);

        setTimeout(() => {
            loadReady.value++;
        }, 3000)

        return{
            loadReady,
            isShowing,
            resetIsShowing() {
              isShowing.value = false
      
              setTimeout(() => {
                isShowing.value = true
              }, 500)
            },
        }
    },
});