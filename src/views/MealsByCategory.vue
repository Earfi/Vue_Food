<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';
import router from '../router';
import axiosMeals from '../axiosMeals';

const route = useRoute();
const sendMealsCategory = computed(() => store.state.mealsByCategory);
const vueSendCategory = ref(false);

onMounted(async () => {
    store.dispatch('searchMealsByCategory', route.params.category);
    // const response = await axiosMeals.get(`filter.php?c=${route.params.category}`)
    // sendMealsCategory.value = response.data.meals

    vueSendCategory.value = true
}
)

</script>
 
<template>
    <div>
        <Meals :inputMealName="sendMealsCategory" class="px-16" />
        <i class="ri-arrow-drop-left-line text-7xl text-gray-500 absolute left-0 top-[105px] sm:top-20 lg:left-64 cursor-pointer hover:text-gray-200"
            @click="router.go(-1)"></i>
    </div>
</template>
 
<style scoped></style>