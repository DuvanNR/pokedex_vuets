<script lang="ts" src="./ListPokemons.ts" />

<template>

  <CardModalPokemon :key="modalKey" :isOpenModal="stateModal" :name="namePokmeon" />

  <div class="">
    <div class="w-full inline-flex flex-col justify-center relative text-gray-500">

        <ul class="w-full mt-2 " :show="listPokemons.length > 0">
            <li
              v-for="pokemon in listPokemons" :key="pokemon.name"
              class="flex flex-row-reverse items-center mt-3 text-left h-16 rounded bg-white mb-0.2 p-2 pl-4 border-b-2 border-gray-100 relative">
                <svg
                  @click="markFavorite(pokemon.name, $event)"
                  :class="(favoritesSaved.includes( pokemon.name )) ? `activeStar` : ``"
                  class="svgIconStar h-full cursor-pointer"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="22" fill="#F5F5F5"/>
                  <path
                    d="M20.6052 9.90444L17.4318 16.627L10.3316 17.7086C9.05834 17.9015 8.54806 19.5415 9.47142 20.4809L14.6082 25.7107L13.3933 33.0984C13.1746 34.4338 14.5208 35.4341 15.6482 34.8096L22 31.3213L28.3518 34.8096C29.4792 35.429 30.8254 34.4338 30.6067 33.0984L29.3918 25.7107L34.5286 20.4809C35.4519 19.5415 34.9417 17.9015 33.6684 17.7086L26.5682 16.627L23.3948 9.90444C22.8262 8.70615 21.1787 8.69092 20.6052 9.90444Z" 
                    fill="#BFBFBF"
                    />
                </svg>

                <span @click="openModal(pokemon.name)" class="w-full align-middle text-xl text-gray-primary cursor-pointer">{{pokemon.name}}</span>
            </li>
        </ul>

    </div>
  </div>


</template>

<style scoped>

/* .svgIconStar:hover path{
  fill: var(--color-mustard);
} */

.activeStar path{
  fill: var(--color-mustard) !important;
}

</style>