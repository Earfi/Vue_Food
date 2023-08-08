<style scoped></style>
<template>
    <div class="flex overflow-auto  bg-white h-full md:flex-col md:w-2/12 text-center shadow-2xl">
        <h1 class="ml-10 pb-4 pt-2 font-bold text-2xl border-b-2 md:ml-0">Category</h1>
        <div class="mt-9 pb-4 font-semibold" v-for="category of categories.categories" :key="category.idCategory">
            <router-link :to="{ name: 'byCategory', params: { category: category.strCategory } }"
                class="hover:text-orange-400">
                <h1>{{ category.strCategory }}</h1>
                <hr class="w-36 mx-auto">
            </router-link>
        </div>
    </div>
</template>
 
<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import axiosMeals from '../axiosMeals';

const categories = ref([])

watch(() => { })

onMounted(async () => {
    const response = await axiosMeals.get('categories.php');
    categories.value = response.data;
})


</script>