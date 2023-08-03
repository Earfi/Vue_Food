<template>
    <Meals :inputMealName="sendMeals" class="px-16" />
</template>
 
<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';

const sendMeals = computed(() => store.state.searchedMeals)

onMounted(() => {
    if (store.searchedMeals == "") {
        store.dispatch('searchMeals', "A")
    } else {

    }
})

</script>
 