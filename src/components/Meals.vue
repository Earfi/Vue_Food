<style scoped></style>

<template>
    <div class="px-5 mt-5 w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <MealsAllItems v-for="meal of inputMealName" :key="meal.idMeal" :mealItem="meal" />
    </div>

    <div v-if="!inputMealName.length" class="w-full bg-white h-32 shadow-xl">
        <h1 class="mt-10 text-4xl text-center font-mono border-b-4 border-orange-400">There are no Meals</h1>
    </div>
</template>
 
<script setup>
import MealsAllItems from "../components/MealsAllItems.vue"

const { inputMealName } = defineProps({
    inputMealName: {
        required: true,
        type: Array
    }
})

</script>