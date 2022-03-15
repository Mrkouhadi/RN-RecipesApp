import React, { useState, useLayoutEffect, useCallback } from 'react'
import {View, Text, StyleSheet, Switch, Platform, Button} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign"; 

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import colors from '../constants/colors';
import { setFilters } from '../store/actions/meals';
// helper component
            const FilterSwitch = (props)=>{
                return  <View style={styles.filterContainer}>
                            <Text>{props.title}</Text>
                                <Switch trackColor={{false:'#fff', true:colors.primaryColor}}
                                    thumbColor={Platform.OS === 'android'?colors.primaryColor:''}
                                    value={props.filter} 
                                    onValueChange={()=>props.func(!props.filter)} 
                                />
                        </View>
            }

const Filters = (props) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const dispatch = useDispatch();

    const saveHandler = useCallback(()=>{  // usign usecallback, saveHandler will be recreated only when there is a change in the state
        const appliedFilters = {
            isGlutenFree,
            isLactoseFree,
            isVegan,
            isVegetarian,
        }
        dispatch(setFilters(appliedFilters));
    },[isGlutenFree,isVegan,isVegetarian,isLactoseFree, dispatch]);

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            // headerBackTitle:'cc',
            headerRight:()=> <Icon name="save" color={colors.primaryColor}  size={25}  onPress={saveHandler}/>,
        });
      }, [props.navigation, saveHandler])

    return (
        <View style={styles.screen}>
           <Text style={styles.title}> Available Filters  </Text>
            <FilterSwitch title="Gluten-free" filter={isGlutenFree} func={setIsGlutenFree} />
            <FilterSwitch title="Vegan" filter={isVegan} func={setIsVegan} />
            <FilterSwitch title="Vegetarian" filter={isVegetarian} func={setIsVegetarian} />
            <FilterSwitch title="Lactose-Free" filter={isLactoseFree} func={setIsLactoseFree} />
        </View>
    )
}
export default Filters;
const styles = StyleSheet.create({
    screen:{
        alignItems:'center',
        flex:1
    },
    title:{
        fontSize:22,
        margin:20,
        textAlign:'center',
    },
    filterContainer:{
        backgroundColor:'pink',
        padding:10, borderRadius:8,
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:4,
    }
})