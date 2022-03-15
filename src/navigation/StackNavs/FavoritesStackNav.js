import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealDetails from '../../screens/MealDetails'
import Favorites from '../../screens/Favorites'
import colors from '../../constants/colors';

const Stack = createNativeStackNavigator();

const FavoritesStackNav = () =>{

  return <Stack.Navigator  screenOptions={{
   								headerStyle: {
   									backgroundColor: colors.accentColor,
   									},
   								headerTintColor: colors.primaryColor,
								// headerBackTitle:"oo",
   								headerTitleStyle: {
   									fontWeight: 'bold',
   									},
   							}}
		>
              <Stack.Screen name="favorites" component={Favorites}  options={{title:"Favorites", headerShown:false}}/>
              <Stack.Screen name="favoriteMealDetails" component={MealDetails}  options={{title:"My fav meal"}}/>
        </Stack.Navigator>
}
export default FavoritesStackNav;