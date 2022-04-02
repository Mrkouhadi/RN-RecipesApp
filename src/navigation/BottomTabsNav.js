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
                        tabBarInactiveTintColor: '#fff',
                        tabBarActiveTintColor: '#AD40AF',
                   }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=><Icon name="home" color={colors.accentColor} size={25} />}} />
          <Tab.Screen name="Meals" component={RecipesStackNav} options={{tabBarIcon:()=><Ionicons name="md-fast-food-outline" color={colors.accentColor}  size={25} />}} />
          <Tab.Screen name="Favorites"  component={FavoritesStackNav}  options={{tabBarIcon:()=><Icon name="staro" color={colors.accentColor}  size={25} />, tabBarBadge: favoriteMeals.length }} />
    </Tab.Navigator>
  )
}
export default BottomTabsNav;