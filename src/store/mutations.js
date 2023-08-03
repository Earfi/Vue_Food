export function setSearchMeals(state,meals){
    state.searchedMeals = meals || []
}

export function setSearchMealsByLetter(state,meals){
    state.mealsByLetter = meals || []
}