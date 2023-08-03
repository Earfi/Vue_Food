import axiosMeals from "../axiosMeals.js";

export function searchMeals({commit},keyword){
    axiosMeals.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchMeals',data.meals)
    })
}

export function searchMealsByLetter({commit},letter){
    axiosMeals.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setSearchMealsByLetter',data.meals)
    })
}