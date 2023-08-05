<style scoped></style>
 <!-- lg -->
<template>
    <div class=" bg-white h-full w-2/12 text-center shadow-2xl">
        <h1 class="pb-4 pt-2 font-bold text-2xl border-b-2">Category</h1>
        <div class="mt-9 pb-4 font-semibold" v-for="category of categories.categories" :key="category.idCategory">
            <router-link :to="{ name: 'byCategory', params: { category: category.strCategory } }"
                class="hover:text-orange-400" @click="reloadPage()">
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

function reloadPage() {
    // window.location.reload();
}
</script>