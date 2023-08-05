<template>
    <div class="h-full w-full flex flex-col">
        <div
            class="bg-white w-full h-16 pl-[350px] flex gap-4 justify-center items-center shadow-lg overflow-x-auto sm:pl-32 md:pl-0">
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
import { computed, watch, onMounted, onBeforeMount } from 'vue';
import Meals from '../components/Meals.vue';
import store from '../store';

const route = useRoute();
const sendMeals = computed(() => store.state.mealsByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// const defaultLetter = "A";

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

// onBeforeMount(() => {
//     store.dispatch('searchMealsByLetter', defaultLetter)
// })

onMounted(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
})

watch(() => {
    const currentPath = window.location.pathname;
    const location = currentPath[currentPath.length - 1]
    store.dispatch('searchMealsByLetter', location);
})

</script>