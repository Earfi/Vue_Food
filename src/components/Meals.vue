<style scoped></style>

<template>
    <div class="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <MealsAllItems v-for="meal of inputMealName" :key="meal.idMeal" :mealItem="meal" />
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