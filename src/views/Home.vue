<style scoped></style>

<template>
    <Meals v-if="vueSend" :inputMealName="sendMeals" class="px-16" />
    <Meals v-if="vueSendArea" :inputMealName="sendMealsArea" class="px-16" />
    <i v-if="retureButton"
        class="ri-arrow-drop-left-line text-7xl text-gray-500 absolute left-0 top-[105px] sm:top-20  md:left-[16%] cursor-pointer hover:text-gray-200"
        @click="router.go(-1)"></i>
</template>
 
<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';
import router from '../router';
import axiosMeals from '../axiosMeals';

const route = useRoute();
const sendMeals = computed(() => store.state.searchedMeals);
const sendMealsArea = ref([]);
const sendMealsCategory = computed(() => store.state.mealsByCategory);
const retureButton = ref(false);
const vueSend = ref(true);
const vueSendArea = ref(false);
const vueSendCategory = ref(false);
const defaultLetter = "A"

onMounted(async () => {
    // if (store.searchedMeals == "") {
    //     store.dispatch('searchMeals', defaultLetter)

    //     vueSend.value = true
    //     retureButton.value = false
    //     vueSendArea.value = false
    //     vueSendCategory.value = false

    // } else
    if (window.location.pathname.includes("by-ingredient")) {
        store.dispatch('searchMeals', route.params.ingredient)

        retureButton.value = true
        vueSendArea.value = false
        vueSend.value = true
        vueSendCategory.value = false

    } else if (window.location.pathname.includes("by-area")) {
        const response = await axiosMeals.get(`filter.php?a=${route.params.area}`)
        sendMealsArea.value = response.data.meals

        retureButton.value = true
        vueSendArea.value = true
        vueSend.value = false
        vueSendCategory.value = false

    } else if (window.location.pathname.includes("by-category")) {
        store.dispatch('searchMealsByCategory', route.params.category);
        // const response = await axiosMeals.get(`filter.php?c=${route.params.category}`)
        // sendMealsCategory.value = response.data.meals

        vueSendCategory.value = true
        retureButton.value = false
        vueSendArea.value = false
        vueSend.value = false
    }
})

</script>
 