import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecipesStackNav from './StackNavs/RecipesStackNav';
import FavoritesStackNav from './StackNavs/FavoritesStackNav';
import HomeScreen from '../screens/HomeScreen';
import Icon from "react-native-vector-icons/AntDesign"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 
import colors from '../constants/colors';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabsNav = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  return (
    <Tab.Navigator screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: {backgroundColor: 'pink'},
                        tabBarInactiveTintColor: colors.accentColor,
                        tabBarActiveTintColor: '#AD40AF',
                   }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({color, focused})=><Ionicons name={focused ? 'home':'home-outline'} color={color} size={25} />}} />
          <Tab.Screen name="Meals" component={RecipesStackNav} options={{tabBarIcon:({color, focused})=><Ionicons name={focused ? 'fast-food':'fast-food-outline'} color={color}  size={25} />}} />
          <Tab.Screen name="Favorites"  component={FavoritesStackNav}  options={{tabBarIcon:({color,focused})=><Icon name={focused ? 'star':'staro'}  color={color}  size={25} />, tabBarBadge: favoriteMeals.length }} />
    </Tab.Navigator>
  )
}
export default BottomTabsNav;