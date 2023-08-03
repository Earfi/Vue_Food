<style scoped></style>
 
<template>
    <div class=" bg-white h-full w-2/12 text-center shadow-2xl">
        <h1 class="font-bold text-2xl pb-4 border-b-2 pt-2">Category</h1>
        <div class="mt-9 pb-4 font-semibold" v-for="category of categories.categories" :key="category.idCategory">
            <router-link :to="{ name: home }" class="hover:text-orange-400">
                <h1 class="">{{ category.strCategory }}</h1>
                <hr class="w-36 mx-auto">
            </router-link>
        </div>
    </div>
</template>
 
<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import axiosMeals from '../axiosMeals';

const categories = ref([])

onMounted(async () => {
    const response = await axiosMeals.get('categories.php');
    categories.value = response.data;
})
</script>