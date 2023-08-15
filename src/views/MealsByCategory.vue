<style scoped></style>

<template>
    <div class="w-full  flex flex-col">
        <Category class="w-full mt-6 mb-5 shadow-md block md:hidden" />
        <Meals :inputMealName="sendMealsCategory" class="px-16" />
    </div>
</template>

<script setup>
import { computed, onBeforeMount, watch } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';
import Category from '../components/Category.vue';

const route = useRoute();
const sendMealsCategory = computed(() => store.state.mealsByCategory);

onBeforeMount(async () => {
    store.dispatch('searchMealsByCategory', route.params.category);
})

watch(async () => {
    store.dispatch('searchMealsByCategory', route.params.category);
})

</script>