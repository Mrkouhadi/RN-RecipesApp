import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../../screens/Categories'
import CategoryMeals from '../../screens/CategoryMeals'
import MealDetails from '../../screens/MealDetails';
const Stack = createNativeStackNavigator();

const RecipesStackNav = () =>{

  return <Stack.Navigator  screenOptions={{
   								headerStyle: {
   									backgroundColor: '#f4511e',
   									},
   								headerTintColor: '#fff',
   								headerTitleStyle: {
   									fontWeight: 'bold',
   									},
   							}}
		>
			  <Stack.Screen name="Categories" component={Categories}  options={{title:"Categories", headerShown:false}}/>
			  <Stack.Screen name="meals" component={CategoryMeals }  options={{title:"Meals", headerShown:true}}/>
			  <Stack.Screen name="MealDetails" component={MealDetails }  options={{title:"My meal"}}/>
        </Stack.Navigator>
}
export default RecipesStackNav;