<template>
    <div
        class="bg-white w-full rounded-xl h-80 overflow-hidden border-2 border-black hover:border-red-500 hover:shadow-2xl">
        <RouterLink :to="{ name: 'mealsDetail', params: { id: mealItem.idMeal } }">
            <img :src="mealItem.strMealThumb" :alt="mealItem.strMeal" class="h-4/6 w-full object-cover">
            <div class="px-4">
                <h1 class="font-bold">{{ mealItem.strMeal }}</h1>
                <hr>
                <p class="text-sm">Lorem ipsum, dolor sit amet consectetur?</p>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const { mealItem } = defineProps({
    mealItem: {
        required: true,
        type: Object
    }
})
</script>