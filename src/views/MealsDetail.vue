<template>
    <div class="flex items-center flex-col pb-10 shadow-xl">
        <div class=" w-full">
            <div class=" w-full flex flex-col items-center mt-5">
                <h1 class="text-5xl font-semibold">{{ meals.strMeal }}</h1>
                <img :src="meals.strMealThumb" :alt="meals.strMeal"
                    class="w-96 mt-5 border-2 border-black h-80 object-cover">
                <div class="flex mt-5 gap-9">
                    <h1><b>Category :</b> <span class="text-red-500">{{ meals.strCategory }}</span></h1>
                    <h1><b>Area :</b> <span class="text-red-500">{{ meals.strArea }}</span></h1>
                </div>
                <h1 class="px-20 indent-8 mt-5">{{ meals.strInstructions }}</h1>
                <div class="flex mt-5 gap-32">
                    <div>
                        <h1 class="text-xl mb-2"><b>Ingredient</b></h1>
                        <div v-for="(item, index) of new Array(20)">

                            <h1 v-if="meals[`strIngredient${index + 1}`]"><b>{{ index + 1 }}.</b> {{
                                meals[[`strIngredient${index
                                    +
                                    1}`]] }}</h1>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-xl mb-2"><b>Measures</b></h1>
                        <div v-for="(item, index) of new Array(20)">

                            <h1 v-if="meals[`strMeasure${index + 1}`]"><b>{{ index + 1 }}.</b> {{
                                meals[[`strMeasure${index
                                    +
                                    1}`]] }}</h1>
                        </div>
                    </div>
                </div>

                <h1 class="mt-8 hover:text-red-500 cursor-pointer font-serif "><a :href="meals.strYoutube"
                        target="_blank">Youtube</a></h1>

            </div>
            <i class="ri-arrow-drop-left-line text-7xl absolute top-20 cursor-pointer hover:text-gray-700"
                @click="router.go(-1)"></i>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosMeals from '../axiosMeals';
import router from '../router';

const route = useRoute();
const meals = ref([]);

onMounted(async () => {
    window.scrollTo(0, 0);
    const response = await axiosMeals.get(`lookup.php?i=${route.params.id}`)
    console.log(response.data);
    meals.value = response.data.meals[0]
})

</script>