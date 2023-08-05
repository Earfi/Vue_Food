<style  scoped>
html {
    transition: .5s ease all;
}

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
    <header :class="{ 'scrolled-nav': scrollPosition }"
        class="bg-gradient-to-r from-orange-400 to-orange-300 z-50 w-full fixed ">
        <nav class="relative flex flex-row justify-between px-3 py-0 w-[90%] mx-auto my-0 h-14 md:h-16">
            <div>
                <router-link :to="{ name: 'home' }"><img src="../assets/logo.jpg" class="w-12 pt-1 md:pt-2"
                        alt="logo"></router-link>
            </div>
            <!-- no mobile -->
            <ul class="hidden flex-row items-center gap-8 md:flex">
                <li><router-link :to="{ name: 'byLetter' }" class="link">Menu By Letter</router-link></li>
                <li><router-link :to="{ name: 'mealsIngredient' }" class="link">Menu By Ingredient</router-link></li>
                <li><router-link :to="{ name: 'mealsArea' }" class="link">Menu By Area</router-link></li>
            </ul>
            <!-- mobile -->
            <ul v-show="moblieMode"
                class="dropdown-nav absolute flex flex-col gap-10 h-[100vh] w-5/6 bg-black text-center pt-[70px] sm:w-3/5 md:hidden"
                :class="[moblieMode ? 'right-[-40px]' : 'right-[-100%]']">
                <li><router-link :to="{ name: 'byLetter' }" class="link" @click="closeBar()">Menu By Letter</router-link>
                </li>
                <li><router-link :to="{ name: 'mealsIngredient' }" class="link" @click="closeBar()">Menu By
                        Ingredient</router-link></li>
                <li><router-link :to="{ name: 'mealsArea' }" class="link" @click="closeBar()">Menu By Area</router-link>
                </li>
            </ul>
            <div class="icon mt-4 absolute top-0 right-6 h-full text-white ">
                <i @click="toggleMobileNav()" class="ri-menu-line cursor-pointer text-2xl md:hidden"
                    :class="{ 'icon-active': moblieNav }"></i>
            </div>
        </nav>
    </header>
</template>
 
<script setup>
import 'remixicon/fonts/remixicon.css'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const scrollPosition = ref(null);
const moblieMode = ref(null);

function toggleMobileNav() {
    this.moblieMode = !this.moblieMode;
}

function closeBar() {
    this.moblieMode = !this.moblieMode;
}

</script>


















