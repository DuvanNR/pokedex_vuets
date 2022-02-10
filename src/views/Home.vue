<template>

  <div class='flex justify-center min-h-screen'>
    <section class="text-center mt-16 mx-6 md:w-1/3 sm:w-1/2">
      <img class="m-auto" src="../assets/img/imghome.png" />
      <h1 class="text-gray-primary mt-16 mb-8 text-2xl lg:text-3xl font-bold">Welcome to Pokédex</h1>
        <p class="text-gray-primary-alt">
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
        </p>
        <div class="mt-8">
          <router-link
          :to="{ name: 'pokedex' }"
          class="btn-base btn-red w-full">
            Get started
          </router-link>
        </div>
        
    </section>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
