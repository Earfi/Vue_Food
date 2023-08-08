<style scoped></style>

<template>
    <Meals v-if="vueSend" :inputMealName="sendMeals" class="px-16" />
    <Meals v-if="vueSendArea" :inputMealName="sendMealsArea" class="px-16" />
    <i v-if="retureButton"
        class="ri-arrow-drop-left-line text-7xl text-gray-500 absolute left-0 top-[105px] sm:top-20  md:left-[16%] cursor-pointer hover:text-gray-200"
        @click="router.go(-1)"></i>
</template>
 
<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue';
import { useRoute } from 'vue-router';
import router from '../router';
import axiosMeals from '../axiosMeals';

const route = useRoute();
const sendMeals = computed(() => store.state.searchedMeals);
const sendMealsArea = ref([]);
const retureButton = ref(false);
const vueSend = ref(true);
const vueSendArea = ref(false);

onMounted(async () => {
    if (window.location.pathname.includes("by-ingredient")) {
        store.dispatch('searchMeals', route.params.ingredient)

        vueSend.value = true
        retureButton.value = true
        vueSendArea.value = false

    } else if (window.location.pathname.includes("by-area")) {
        const response = await axiosMeals.get(`filter.php?a=${route.params.area}`)
        sendMealsArea.value = response.data.meals

        vueSendArea.value = true
        retureButton.value = true
        vueSend.value = false

    } else {
        vueSendArea.value = false
        retureButton.value = false
        vueSend.value = true
    }
})

</script>
 