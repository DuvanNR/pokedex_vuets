<template>

  <LoaderPokemons />

  <div class=" justify-center min-h-screen mb-32">
    <div class="mx-auto text-center mt-8 w-5/6 md:w-2/5 sm:w-5/6">

      <div class="bg">
        <FilterByName />
      </div>

      <div v-show="listPokemons.length <= 0">
          <h1 class="font-bold text-4xl pb-2">Uh-oh!</h1>
          <p class="pb-4">You look lost on your journey!</p>
          <div class="mt-2">
            <router-link
                :to="{ name: 'home' }"
                class="btn-base btn-red">
                Go back home
                </router-link>
          </div>
      </div>

      <div class="bg">
        <ListPokemons />
      </div>

    </div>
  </div>

  <div v-show="listPokemons.length > 0" class="w-full p-4 bg-white fixed bottom-0 box-shadow-customBar">
    <FilterByFavorite />
  </div>

</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { usePokemonStore } from '@/composables/usePokemonStore';
import ListPokemons  from '@/components/ListPokemons/ListPokemons.vue';
import LoaderPokemons  from '@/components/LoaderPokemons/LoaderPokemons.vue';
import FilterByFavorite  from '@/components/FilterByFavorite/FilterByFavorite.vue';
import FilterByName  from '@/components/FilterByName/FilterByName.vue';

export default defineComponent({
  name: 'Pokedex',
  components: {
    LoaderPokemons,
    ListPokemons,
    FilterByFavorite,
    FilterByName
  },
  setup(){

    const { initListPokemos, listPokemons } = usePokemonStore();

    onMounted( () => {
        initListPokemos();
    });

    return {
      listPokemons
    }

  }
});
</script>
