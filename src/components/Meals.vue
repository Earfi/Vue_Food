<style scoped></style>

<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
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