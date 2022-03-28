import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'


const AboutScreen = props => {
    return (
        <View style={styles.screen}>
           <Text>  This is a sample screen of ABOUT page  </Text>
           <Button title="open drawer" color='black'
                    onPress={()=>props.navigation.openDrawer()}
           />
        </View>
    )
}
export default AboutScreen;
const styles = StyleSheet.create({
    screen:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f9f9f9',
        flex:1
    }
})
