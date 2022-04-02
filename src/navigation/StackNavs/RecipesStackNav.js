import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from '../../screens/Categories'
import CategoryMeals from '../../screens/CategoryMeals'
import MealDetails from '../../screens/MealDetails';
import colors from '../../constants/colors';
const Stack = createNativeStackNavigator();

const RecipesStackNav = () =>{

  return <Stack.Navigator  screenOptions={{
   								headerStyle: {
   									backgroundColor: colors.accentColor,
   									},
   								headerTintColor:colors.primaryColor,
   								headerTitleStyle: {
   									fontWeight: 'bold',
   									},
   							}}
		>
			  <Stack.Screen name="Categories" component={Categories}  options={{title:"Categories", headerShown:false}}/>
			  <Stack.Screen name="meals" component={CategoryMeals }  options={{title:"", headerShown:true}}/>
			  <Stack.Screen name="MealDetails" component={MealDetails }  options={{title:''}}/>
        </Stack.Navigator>
}
export default RecipesStackNav;