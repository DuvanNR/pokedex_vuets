<script lang="ts" src="./FilterByFavorite.ts" />

<template>

    <div class="w-full inline-flex my-2 justify-center relative text-gray-500">
        <button
            :class="(btnActiveFavorite) ? `btn-gray` : `btn-red`"
            @click="filterByFavorite(false, $event)"
            class="btn-favorite btn-base w-5/6 md:w-1/5 sm:w-1/2 mx-2 px-8 py-2 font-bold md:text-base sm:text-sm inline-flex items-center space-x-2">
            <img src="../../assets/img/icon-list-white.png" alt="icon-list-white">
            <span>All</span>
        </button>
        <button
            :class="(btnActiveFavorite) ? `btn-red` : `btn-gray`"
            @click="filterByFavorite(true, $event)"
            class="btn-favorite btn-base w-5/6 md:w-1/5 sm:w-1/2 mx-2 px-8 py-2 font-bold text-base sm:text-sm inline-flex items-center space-x-2">
            <img src="../../assets/img/icon-star-white.png" alt="icon-star-white">
            <span>Favorites</span>
        </button>
    </div>

</template>

<style scoped>


</style>