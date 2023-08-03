<template>
    <div class="h-full flex flex-col w-full">
        <div class="h-16 flex justify-center items-center gap-4 shadow-lg bg-white">
            <div v-for="letter of letters">
                <RouterLink :to="{ name: 'byLetter', params: { letter } }">
                    <h1 class=" font-bold cursor-pointer hover:text-red-500">{{ letter }}</h1>
                </RouterLink>
            </div>
        </div>
        <Meals :inputMealName="sendMeals" class="px-16 mt-8" />
    </div>
</template>
 
<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { computed, watch, onMounted } from 'vue';
import Meals from '../components/Meals.vue';
import store from '../store';

const route = useRoute()
const sendMeals = computed(() => store.state.mealsByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

onMounted(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

watch(() => {
    const currentPath = window.location.pathname;
    const location = currentPath[currentPath.length - 1]
    store.dispatch('searchMealsByLetter', location);
    // console.log(currentPath);
    // console.log(location);
})

</script>