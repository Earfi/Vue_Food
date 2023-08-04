<template>
    <Navbar class="z-50" />
    <main class="pt-16 w-full flex-none lg:flex lg:flex-row ">
        <Category class="hidden lg:block" />
        <div class="flex flex-col pb-10 items-center shadow-xl lg:w-10/12 lg:flex-none ">
            <div class="my-4" v-if="!currentPath.includes('meals-detail')">
                <input v-model="keyword" type="text" class="w-[250px] sm:w-[500px] h-10 pl-5 rounded-2xl border-2 shadow"
                    placeholder="Search for Meals" @change="searchMeals" @keyup.enter=" goHome()">
            </div>
            <RouterView></RouterView>
        </div>
    </main>
    <footer class="bg-black w-full h-12 ">
        <h1 class="text-white pt-2 flex justify-center text-xl font-bold">My first Project / Earfi</h1>
    </footer>
</template>
 
<script setup>
import { RouterView } from 'vue-router';
import { ref, watch } from 'vue';
import Navbar from './Navbar.vue';
import Category from './Category.vue';
import store from '../store';
import router from '../router';

const keyword = ref('')
const currentPath = ref(window.location.pathname);

function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value)
    }
}

function goHome() {
    router.push({ name: 'home' })
}

watch(() => {
    store.dispatch('searchMeals', keyword.value)
})

</script>