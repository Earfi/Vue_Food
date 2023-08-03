<template>
    <div class="bg-white shadow rounded-xl">
        <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-52 object-cover">
        </RouterLink>
        <div class="p-3">
            <h3 class="font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolores fuga distinctio
                praesentium sint
                esse
                eaque eveniet dolorem nemo iste!</p>
            <div class="flex items-center justify-between">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                <RouterLink to="/"
                    class="px-3 py-2  rounded border-2 border-purple-600 bg-purple-600 text-white transition-colors">
                    View </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';


const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>