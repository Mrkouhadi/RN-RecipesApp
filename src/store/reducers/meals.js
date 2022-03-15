import {TOGGLE_FAVORITE , SET_FILTERS} from '../actions/meals'
import {MEALS} from '../../data/dummy-data';

        const initialState = {
            meals:MEALS,
            favoriteMeals:[],
            filteredMeals:MEALS,
        }

const mealsReducer = (state = initialState, action)=>{
    switch (action.type) {
        case TOGGLE_FAVORITE:
                const exist = state.favoriteMeals.findIndex(meal=>meal.id === action.mealId)
                if(exist >= 0){
                    const updatedFavMeals = [...state.favoriteMeals] // using this in orer not to mutate te original array; get only a copy
                    updatedFavMeals.splice(exist, 1);
                    return {...state,  favoriteMeals :updatedFavMeals }
                }else{
                    const newFavMeal = state.meals.find(meal => meal.id === action.mealId)
                    return {...state, favoriteMeals:state.favoriteMeals.concat(newFavMeal)}
                }
        case SET_FILTERS :
                    const appliedFilters = action.filters;
                    const newFilteredMeals = state.meals.filter(meal=>{
                        if(appliedFilters.isGlutenFree && !meal.isGlutenFree){
                            return false
                        }
                        if(appliedFilters.isLactoseFree && !meal.isLactoseFree){
                            return false
                        }
                        if(appliedFilters.isVegetarian && !meal.isVegetarian){
                            return false
                        }
                        if(appliedFilters.isVegan && !meal.isVegan){
                            return false
                        }
                        return true;
                    })
                    return {...state, filteredMeals:newFilteredMeals }


                
        default : return state;
    }
    return state;
}
export default mealsReducer;