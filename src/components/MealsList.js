import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import MealItem from './MealItem'

const MealsList = props =>{

    const renderMeals = (mealData)=>{
        return <MealItem 
                        onSelect={()=> props.navigation.navigate({name:props.favDetails || "MealDetails",
                        params:{
                            meal_id:mealData.item.id,
                            meal_title:mealData.item.title,
                            }
                        })}
                         title={mealData.item.title} 
                         duration={mealData.item.duration}
                         complexity={mealData.item.complexity}
                         affordability={mealData.item.affordability}
                         image={mealData.item.imageUrl}
                />
    }

    return (
        <View style={styles.list}>
           <FlatList data={props.listData} renderItem={renderMeals} style={{width:"100%", paddingHorizontal:10}} />
        </View>
    )
}
const styles = StyleSheet.create({
    list:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:"#f9f9f9"
    }
})
export default MealsList