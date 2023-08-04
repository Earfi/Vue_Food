<style scoped></style>
 
<template>
    <header class="bg-gradient-to-r from-orange-300 to-orange-500 w-full h-16 flex justify-between items-center text-white shadow-lg fixed font-bold text-l 
        ">
        <router-link :to="{ name: 'home' }" class=" ml-10">
            FOOD
        </router-link>
        <div class="flex gap-16 items-center ">
            <router-link :to="{ name: 'byLetter' }"
                class="hover:text-white px-2 py-1 hover:bg-orange-600 hover:rounded-3xl">Menu
                By Letter</router-link>
            <router-link :to="{ name: 'mealsIngredient' }"
                class="hover:text-white px-2 py-1 hover:bg-orange-600 hover:rounded-3xl">Menu
                By
                Ingredient</router-link>
            <router-link :to="{ name: 'mealsArea' }"
                class="hover:text-white px-2 py-1 hover:bg-orange-600 hover:rounded-3xl">Menu
                By
                Area</router-link>
            <i class="ri-menu-line cursor-pointer"></i>
            <router-link :to="{ name: 'home' }"
                class="mr-8 bg-black px-2 py-1 rounded-3xl hover:bg-gray-100 hover:text-gray-400">SIGN
                UP</router-link>
        </div>
    </header>
</template>
 
<script setup>
import { RouterLink } from 'vue-router';
import 'remixicon/fonts/remixicon.css'

</script>