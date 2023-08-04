import { createWebHistory,createRouter } from 'vue-router';
import Home from "../views/Home.vue"
import MealsDefaultList from "../components/MealsDefaultList.vue"
import MealsByLetter from "../views/MealsByLetter.vue"
import MealsDetail from "../views/MealsDetail.vue"
import MealsByIngredient from "../views/MealsByIngredient.vue"
import MealsByArea from "../views/MealsByArea.vue"

const routes = [
    {
        path: "/",
        component: MealsDefaultList,
        children: [
            {
                path: "/",
                name: "home",
                component: Home
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter
            },
            {
                path: "/meals-detail/:id?",
                name: "mealsDetail",
                component: MealsDetail
            },
            {
                path: "/meals-ingredient/:id?",
                name: "mealsIngredient",
                component: MealsByIngredient
            },
            {
                path: "/meals-area/:area?",
                name: "mealsArea",
                component: MealsByArea
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router