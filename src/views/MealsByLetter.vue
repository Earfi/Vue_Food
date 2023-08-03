<template>
    <div>
        <div class="flex justify-center gap-2 mt-2">
            <RouterLink :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </RouterLink>
        </div>

        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>