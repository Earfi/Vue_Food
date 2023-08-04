<template>
    <div class="mt-5 pl-8 pr-8 w-full grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div v-for="ingredient of ingredients" :key="ingredient.idIngredient" class="w-full grid ">
            <RouterLink :to="{ name: 'mealsIngredient', params: { id: ingredient.idIngredient } }"
                class="bg-white w-48 h-24 px-3 py-1 text-xl text-center leading-10 rounded-xl shadow-2xl hover:text-white hover:bg-orange-300 border hover:border-orange-700">
                {{ ingredient.strIngredient }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosMeals from '../axiosMeals';
import router from '../router';
import store from '../store';

const ingredients = computed(() => store.state.mealsByFilter);
const letter = "i";

onMounted(() => {
    store.dispatch('filterMeals', letter);
})
</script>
 
