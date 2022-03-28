import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const SettingsScreen = props => {

    return (
        <View style={styles.screen}>
           <Text>  This is a sample screen of SETTING page  </Text>
        </View>
    )
}
export default SettingsScreen;
const styles = StyleSheet.create({
    screen:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f9f9f9',
        flex:1
    }
})
