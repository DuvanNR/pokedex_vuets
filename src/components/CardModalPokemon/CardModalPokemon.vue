<script lang="ts" src="./CardModalPokemon.ts" />

<template>

<TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-2 md:pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="false">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div 
            class="w-5/6 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white">
              <div class="sm:flex sm:items-start">
                <div v-for="pokemon in pokemonCard" :key="pokemon.name" class="w-full text-center sm:mt-0 sm:text-left">
                  <img
                    @click="open = false"
                    class="absolute right-0 p-4 cursor-pointer"
                    src="../../assets/img/icon-close.png"
                    alt="Close-Modal">
                  <div class="scene-pokemon w-full h-48">
                      <img class="m-auto h-full" :src="pokemon.sprites" alt="">
                  </div>
                  <div class="mt-2 mx-10">
                    <ul class="w-full mt-2 ">
                        <li class="text-left rounded bg-white mb-0.2 pl-4 pr-8 py-3 border-b-2 border-gray-100 relative">
                            <strong>Name: </strong> {{ pokemon.name }}
                        </li>
                        <li class="text-left rounded bg-white mb-0.2 pl-4 pr-8 py-3 border-b-2 border-gray-100 relative">
                            <strong>Weight: </strong> {{ pokemon.weight }}
                        </li>
                        <li class="text-left rounded bg-white mb-0.2 pl-4 pr-8 py-3 border-b-2 border-gray-100 relative">
                            <strong>Height: </strong> {{ pokemon.height }}
                        </li>
                        <li class="text-left rounded bg-white mb-0.2 pl-4 pr-8 py-3 border-b-2 border-gray-100 relative">
                            <strong>Types: </strong> {{ pokemon.types.join(', ') }}
                        </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div class="px-4 py-3 sm:px-6 flex justify-between">
              <button
                @click="copyClipboard(pokemonCard)"
                type="button"
                class=" btn-base btn-red inline-flex justify-center self-center  px-4 py-2 text-base font-medium text-white  focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                Share to my friends
                </button>
              <svg
                class="w-10 md:w-12"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="22" fill="#F5F5F5"/>
                <path
                    d="M20.6052 9.90444L17.4318 16.627L10.3316 17.7086C9.05834 17.9015 8.54806 19.5415 9.47142 20.4809L14.6082 25.7107L13.3933 33.0984C13.1746 34.4338 14.5208 35.4341 15.6482 34.8096L22 31.3213L28.3518 34.8096C29.4792 35.429 30.8254 34.4338 30.6067 33.0984L29.3918 25.7107L34.5286 20.4809C35.4519 19.5415 34.9417 17.9015 33.6684 17.7086L26.5682 16.627L23.3948 9.90444C22.8262 8.70615 21.1787 8.69092 20.6052 9.90444Z" 
                    :fill="(favoritesSaved.includes( nameTemp )) ? `#ECA539` : `#BFBFBF`"
                    />
                </svg>
            </div>

          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

</template>

<style scoped>

.scene-pokemon{
    background-image: url(../../assets/img/scene.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

</style>