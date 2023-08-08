<template>
    <div class="pb-10 flex items-center flex-col shadow-xl">
        <div class="w-full">
            <div class="w-full flex flex-col items-center mt-5">
                <h1 class="text-5xl font-semibold text-center">{{ meals.strMeal }}</h1>
                <img :src="meals.strMealThumb" :alt="meals.strMeal"
                    class="w-64 h-56 mt-5 object-cover border-2 border-black sm:h-80 sm:w-96">
                <div class="mt-5 flex flex-col gap-9 sm:flex-row">
                    <h1><b>Category :</b> <span class="text-red-500">{{ meals.strCategory }}</span></h1>
                    <h1><b>Area :</b> <span class="text-red-500">{{ meals.strArea }}</span></h1>
                </div>
                <h1 class="px-20 mt-5 indent-8">{{ meals.strInstructions }}</h1>
                <div class="bg-white mx-20 mt-5 grid gap-32 grid-cols-1 lg:grid-cols-2">
                    <div class="border-2">
                        <h1 class="text-xl mb-2 pl-3"><b>Ingredient</b></h1>
                        <hr>
                        <div v-for="(item, index) of new Array(20)" class="px-5">
                            <h1 v-if="meals[`strIngredient${index + 1}`]"><b>{{ index + 1 }}.</b> {{
                                meals[[`strIngredient${index
                                    +
                                    1}`]] }}</h1>
                        </div>
                    </div>
                    <div class="border-2">
                        <h1 class="text-xl mb-2 pl-3"><b>Measures</b></h1>
                        <hr>
                        <div v-for="(item, index) of new Array(20)" class="px-5">

                            <h1 v-if="meals[`strMeasure${index + 1}`]"><b>{{ index + 1 }}.</b> {{
                                meals[[`strMeasure${index
                                    +
                                    1}`]] }}</h1>
                        </div>
                    </div>
                </div>

                <h1
                    class="mt-8 py-2 px-4 rounded-xl cursor-pointer font-serif border-2 border-black bg-red-500 text-white hover:bg-red-400 hover:text-gray-200 hover:border-gray-600">
                    <a :href="meals.strYoutube" target="_blank">Youtube</a>
                </h1>

                <div class="mt-10 w-full">
                    <hr class="border-1 border-black">
                    <h1 class="text-3xl font-bold text-center mt-5">Other Menu</h1>
                </div>

            </div>
            <i class="ri-arrow-drop-left-line text-7xl absolute top-[105px] sm:top-20 cursor-pointer hover:text-gray-700"
                @click="router.go(-1)"></i>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosMeals from '../axiosMeals';
import router from '../router';
import store from '../store';

const route = useRoute();
const meals = ref([]);

onMounted(async () => {
    window.scrollTo(0, 0);
    const response = await axiosMeals.get(`lookup.php?i=${route.params.id}`)
    meals.value = response.data.meals[0]

    store.dispatch('mealsRandom5', 5)
})

</script>