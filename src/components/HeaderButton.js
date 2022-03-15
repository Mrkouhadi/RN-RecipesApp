import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'

import Icon from "react-native-vector-icons/AntDesign";

import colors from '../constants/colors'
import { Platform } from 'react-native';

const CustomHeaderButton = props =>{
        return(
            <HeaderButton {...props} 
                    IconComponent={Icon} 
                    color={Platform.OS === 'ios'? colors.primary : "red"} 
                    iconSize={23}
            />
        )
}
export default CustomHeaderButton;