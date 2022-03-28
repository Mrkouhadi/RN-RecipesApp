import React from "react";
import { StyleSheet, View, Text, Pressable, ImageBackground } from "react-native";

const MealItem = props =>{
    return <View style={styles.itemBox}>
             <Pressable onPress={props.onSelect}>
                <View style={styles.itemDetails}>
                    <View style={{...styles.mealRow,...styles.mealHeader }}>
                        <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                            <View style={styles.titleBox}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDesc }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
             </Pressable>
           </View>
};

const styles = StyleSheet.create({
    itemBox:{
        flex:1, 
        height:200, width:'100%',
        marginVertical:10,
        borderRadius:10,
        overflow:'hidden',
        backgroundColor:'#f9f9f9',
        shadowColor:"#000",
        shadowOffset:{width:0, height:3},
        shadowRadius:10,
        shadowOpacity:0.26,
        elevation:3, 
    },
    titleBox:{
        backgroundColor:'rgba(0,0,0,.5)',
    },
    title:{
        fontSize:24,
        letterSpacing:2,
        color:'#fff',
        paddingVertical:5, paddingHorizontal:12,
        textAlign:'center'
    },
    mealRow:{
        flexDirection:'row',
    },
    mealHeader:{
        height:'80%'
    },
    mealDesc:{  
        width:'100%', height:"20%",
        backgroundColor:"#ccc",
        paddingHorizontal:10,
        justifyContent:'space-between', alignItems:'center'
    },
    bgImage:{
        width:'100%', height:"100%",
        justifyContent:'flex-end'
    }
});

export default MealItem;