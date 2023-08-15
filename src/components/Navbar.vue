<style  scoped>
li .link {
    color: white;
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid white;
    text-shadow: 1px 1px black;
}

li .link:hover {
    background: rgba(255, 165, 30, 0.779);
}
</style>
 
<template>
    <header class="bg-gradient-to-r from-orange-400 to-orange-600 z-50 w-full fixed">
        <nav class="relative flex flex-row justify-between px-3 py-0 w-[90%] mx-auto my-0 h-14 md:h-16">
            <div>
                <router-link :to="{ name: 'home' }">
                    <img src="../assets/logo.jpg" class="w-12 pt-1 md:pt-2 rounded-3xl" alt="logo">
                </router-link>
            </div>
            <ul class="h-[100vh] transition-all ease-in-out w-[70%] relative right-[-10%] bg-black flex flex-col gap-8 text-center pt-20 md:flex-row md:h-full md:bg-transparent md:items-center md:gap-8 md:justify-end md:w-full md:pt-0 md:right-0"
                :class="moblieMode ? 'right-[-1000%]' : 'right-[-100%]'">
                <i v-if="!moblieMode"
                    class="ri-close-circle-line absolute text-3xl top-5 left-5 text-gray-200 cursor-pointer hover:text-gray-500 md:hidden"
                    @click="clearMoblieMode()"></i>
                <li><router-link :to="{ name: 'byLetter' }" class="link" @click="clearMoblieMode()">Menu By
                        Letter</router-link></li>
                <li><router-link :to="{ name: 'mealsIngredient' }" class="link" @click="clearMoblieMode()">Menu By
                        Ingredient</router-link></li>
                <li><router-link :to="{ name: 'mealsArea' }" class="link" @click="clearMoblieMode()">Menu By
                        Area</router-link></li>
            </ul>
            <div v-if="moblieMode" class="icon mt-4 absolute top-0 right-6 h-full text-white ">
                <i @click="toggleMobileNav()" class="ri-menu-line cursor-pointer text-2xl md:hidden"></i>
            </div>
        </nav>
    </header>
</template>
 
<script setup>
import 'remixicon/fonts/remixicon.css'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const moblieMode = ref(null);

function toggleMobileNav() {
    this.moblieMode = !this.moblieMode;
}

function clearMoblieMode() { this.moblieMode = !this.moblieMode; }

if (window.innerWidth <= 768) {
    moblieMode.value = true;
} else {
    moblieMode.value = false;
}

</script>


















