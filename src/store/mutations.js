import state from "./state"
import { mealsRandom5 } from './actions';

export function setSearchMeals(state,meals){
    state.searchedMeals = meals || []
}

export function setSearchMealsByLetter(state,meals){
    state.mealsByLetter = meals || []
}

export function setSearchMealsByCategory(state,meals){
    state.mealsByCategory = meals || []
    console.log(state.FilterMealsByFilter);
}

export function setFilterMealsList(state,meals){
    state.mealsByFilter = meals || []
}

export function setRandomMeals(state, meals) {
  const newMealsSet = new Set([...state.mealsRandom, ...meals]);
  state.mealsRandom = Array.from(newMealsSet);
}