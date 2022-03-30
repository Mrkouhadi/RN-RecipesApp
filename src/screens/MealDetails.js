import React, { useCallback, useLayoutEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {toggleFavorite} from '../store/actions/meals'
import colors from '../constants/colors'
import Icon from "react-native-vector-icons/AntDesign"; 

        // helper component that i use only in this screen
            const ListItem = props =>{
                return <View style={styles.listItem}>
                        <Text style={styles.listItem_txt}>{props.children}</Text>
                      </View>
            }

const MealDetails = (props) => {
    const { meal_id, meal_title } = props.route.params;
    const allMeals = useSelector(state => state.meals.meals);
    const isfavoried = useSelector(state => state.meals.favoriteMeals.findIndex(meal=>meal.id === meal_id)); // helps us check if it exist in favorite recipes list
    
    const dispatch = useDispatch()
    const selectedMeal = allMeals.find(meal => meal.id === meal_id) 

    const toggleFavoriteHandler = useCallback(()=>{
        dispatch(toggleFavorite(meal_id));
    },[dispatch,meal_id])
    useLayoutEffect(()=>{
      props.navigation.setOptions({
            headerLeft:()=><Icon name="back" size={25} color="blue" onPress={()=>props.navigation.goBack()}/>, 
            headerTitle:meal_title,
            headerRight:()=><Icon name={isfavoried>=0 ? "heart" : "hearto"} color={colors.primaryColor}  size={25}  onPress={toggleFavoriteHandler}/>
        });
    },[props.navigation,toggleFavoriteHandler, isfavoried])

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.img}/>
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>INGREDIENTS</Text>
                {selectedMeal.ingredients.map((ingre,i)=> <ListItem key={i}>{ingre}</ListItem>)}
            <Text style={styles.title}>STEPS</Text>
                {selectedMeal.steps.map((step,i)=> <ListItem key={i}>{step}</ListItem>)}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    screen:{
        alignItems:'center',
        minHeight:'100%',
        width:'100%',
    },
    img:{
        width:'100%',
        height:200
    },
    details:{
        width:'100%',
        flexDirection:"row",  justifyContent:'space-between', 
        paddingVertical:10, paddingHorizontal:20,
        backgroundColor:'pink'
    },
    title:{
        color:'blue',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:15,
        letterSpacing:3,

    },
    listItem:{
        width:'90%',
        borderColor:'#ccc',
        paddingVertical:10, paddingHorizontal:20,
        marginVertical:8,
        borderWidth:1,
        padding:10,
        borderRadius:8,
        backgroundColor:'pink',
    },
    listItem_txt:{
        fontSize:16, 
        fontStyle: 'italic',
        fontSize: 20,
        letterSpacing:2,
    }
})
export default MealDetails;