import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {  useSelector } from 'react-redux';
import MealsList from '../components/MealsList';
import colors from '../constants/colors';
import Icon from "react-native-vector-icons/AntDesign"; 

const CategoryMeals = (props) => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const { category_id, category_title } = props.route.params;
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(category_id) >= 0);

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerTitle:category_title,
            headerLeft:()=><Icon name="back" size={25} color="blue" onPress={()=>props.navigation.goBack()}/>, 
        });
    });

    if(displayedMeals.length == 0) return  <View style={styles.screen}>
                                                <Text style={styles.title}>This Category has no meals that match your filers</Text>
                                                <Button color='#000' title="check your filters" onPress={()=>props.navigation.openDrawer()}/>
                                               
                                           </View>
    return <MealsList listData={displayedMeals} navigation={props.navigation} />
};
const styles = StyleSheet.create({
    screen:{
        alignItems:'center', justifyContent:'center',
        flex:1,
        padding:20
    },
    title:{
        fontSize:26,
        color:colors.accentColor,
        textAlign:'center',
        fontWeight:'bold'
    },
})

export default CategoryMeals;
