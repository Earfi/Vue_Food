<style scoped>
@media screen and (max-width: 630px) {
    .allItem {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media screen and (max-width: 496px) {
    .allItem {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>

<template>
    <Category class="w-full mt-6 mb-5 shadow-md block md:hidden" />
    <div class="allItem mt-5 pl-8 pr-8 w-full grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div v-for="ingredient of ingredients" :key="ingredient.idIngredient" class="w-full grid ">
            <RouterLink :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
                class="bg-gradient-to-b from-white to-gray-100 font-semibold w-48 h-24 px-3 py-1 text-xl text-center leading-10 rounded-xl shadow-2xl hover:text-orange-600 hover:bg-orange-300 border hover:border-orange-700">
                {{ ingredient.idIngredient }}. {{ ingredient.strIngredient }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue';
import store from '../store';
import Category from '../components/Category.vue';

const ingredients = computed(() => store.state.mealsByFilter);
const letter = "i";

onBeforeMount(() => {
    store.dispatch('filterMealsList', letter);
})
</script>
 
