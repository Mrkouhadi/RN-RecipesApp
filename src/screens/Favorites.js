import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList';
import PrimaryButton from '../components/PrimaryButton';

const Favorites = (props) => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    useLayoutEffect(()=>{
        props.navigation.setOptions({headerTitle:"Favorite Dishes", headerShown:true});
    })
    if(favoriteMeals.length === 0) return <View style={styles.screen}>
                                            <Text style={styles.title}> You have No Favorite Meals yet !</Text>
                                            <PrimaryButton onPress={()=>props.navigation.navigate('Meals')} styling={styles.btn}>
                                                View all Meals
                                            </PrimaryButton>
                                          </View>
    return <MealsList listData={favoriteMeals} navigation={props.navigation} favDetails="favoriteMealDetails" />
}
const styles = StyleSheet.create({
    screen:{
        alignItems:'center', justifyContent:'center',
        flex:1
    },
    title:{
        marginVertical:20,
        fontSize:24,
        color:'red',
        letterSpacing:2,
        fontWeight:'bold',
        textAlign:'center'
    },
    btn:{
        width:'50%', height:50,
        justifyContent:'center',
        backgroundColor:"#4C5760"
      }
})
export default Favorites;
