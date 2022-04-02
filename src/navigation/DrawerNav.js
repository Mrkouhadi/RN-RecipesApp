import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabsNav from './BottomTabsNav';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import Filters from '../screens/Filters'
import { Platform } from 'react-native';
import colors from '../constants/colors';

const Drawer = createDrawerNavigator();

const DrawerNav = props => {
  return (
    <Drawer.Navigator
          screenOptions={{
            drawerActiveBackgroundColor:colors.primaryColor,
            drawerActiveTintColor:"#f9f9f9",
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: "50%",
            },
            headerStyle: {
              height:Platform.OS === 'ios'? 80 : 55,
              backgroundColor:'pink'
            },
            drawerType:'slide'  // front, back, slide, permanent.  "Defaults to slide on iOS and front on other platforms"
          }}
    >
      <Drawer.Screen name="Home " options={{headerTitle:''}} component={BottomTabsNav}/>
      <Drawer.Screen name="Filters" component={Filters}  />
      <Drawer.Screen name="Setting" component={SettingsScreen}  />
      <Drawer.Screen name="About us" component={AboutScreen }  />


    </Drawer.Navigator>
  );
}
export default DrawerNav;
