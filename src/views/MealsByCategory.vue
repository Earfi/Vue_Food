<style scoped></style>

<template>
    <div>
        <Meals :inputMealName="sendMealsCategory" class="px-16" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const sendMealsCategory = computed(() => store.state.mealsByCategory);

onMounted(async () => {
    store.dispatch('searchMealsByCategory', route.params.category);
})

watch(async () => {
    store.dispatch('searchMealsByCategory', route.params.category);
})

</script>