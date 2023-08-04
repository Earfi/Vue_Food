import axiosMeals from "../axiosMeals.js";

export function searchMeals({commit},keyword){
  try {
    axiosMeals.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchMeals',data.meals)
    })
    } catch (error) {
    console.error('Error while fetching search meals:', error);
  }
}

export function searchMealsByLetter({commit},letter){
  try {
    axiosMeals.get(`search.php?f=${letter}`)
    .then(({data})=>{
        commit('setSearchMealsByLetter',data.meals)
    })
    } catch (error) {
    console.error('Error while fetching search meals:', error);
  }
}

export function searchMealsByCategory({commit},word){
    try{
        axiosMeals.get(`filter.php?c=${word}`)
        .then(({data})=>{
            commit('setSearchMealsByCategory',data.meals)
        })
    }catch(error){
    console.error(`Error while fetching Search meals: ${word} : `, error);
    }
}

export function filterMealsList({commit},letter){
    try{
        axiosMeals.get(`list.php?${letter}=list`)
        .then(({data})=>{
            commit('setFilterMealsList',data.meals)
        })
    }catch(error){
    console.error(`Error while fetching Filter meals: ${letter} : `, error);
    }
}

export async function mealsRandom5({ commit }, num) {
  try {
    for (let i = 0; i < num; i++) {
      const { data } = await axiosMeals.get('random.php');
      commit('setRandomMeals', data.meals);
    }
  } catch (error) {
    console.error('Error while fetching random meals:', error);
  }
}
