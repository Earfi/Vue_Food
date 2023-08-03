<template>
    <Navbar class="z-50" />
    <main class="pt-16 flex flex-row">
        <Category />
        <div class="w-10/12 flex items-center flex-col pb-10 shadow-xl">
            <div class="my-4" v-if="!currentPath.includes('meals-detail')">
                <input v-model="keyword" type="text" class="w-[500px] h-10 rounded-2xl pl-5 border-2 shadow"
                    placeholder="Search for Meals" @change="searchMeals" @keyup.enter=" goHome()">
            </div>
            <RouterView></RouterView>
        </div>
    </main>
    <footer class="w-full h-12 bg-black">
        <h1 class="text-white flex justify-center text-xl font-bold pt-2">My first Project / Earfi</h1>
    </footer>
</template>
 
<script setup>
import { RouterView } from 'vue-router';
import { onMounted, ref, watch, watchEffect } from 'vue';
import Navbar from './Navbar.vue';
import Category from './Category.vue';
import store from '../store';
import router from '../router';

const keyword = ref('')
const currentPath = ref(window.location.pathname);

function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value)
        // console.log(keyword.value);
    }
}

function goHome() {
    router.push({ name: 'home' })
}

watch(() => {
    store.dispatch('searchMeals', keyword.value)
})

</script>