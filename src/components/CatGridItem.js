import React from "react"
import {View, TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback, Platform} from 'react-native'

const CatGridItem = props =>{

    return <TouchableOpacity style={styles.gridItem}
                onPress={props.onSelect}
            >
                <View style={{...{backgroundColor:props.color},...styles.item}}>
                    <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1, 
        height:150,
        margin:15, 
        borderRadius:10,
        overflow:'hidden',
        shadowColor:"#000",
        shadowOffset:{width:0, height:3},
        shadowRadius:10,
        shadowOpacity:0.26,
        elevation:3, 
    },
    item:{
        width:'100%', height:'100%',
        padding:6,
        alignItems:'flex-end', justifyContent:'flex-end',
    },
    title:{
        fontSize:20,
        letterSpacing:1
    }
});
export default CatGridItem;