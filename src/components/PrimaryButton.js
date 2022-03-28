import React from 'react'
import { StyleSheet, Text, Pressable, } from 'react-native'

const PrimaryButton = props => {
  return <Pressable onPress={props.onPress}
                 style={{...styles.btnContainer, ...props.styling}}>
            <Text style={styles.btnText}>{props.children}</Text>
        </Pressable>
}

const styles = StyleSheet.create({
    btnContainer:{
        paddingVertical:6, paddingHorizontal:12,
        borderRadius:8,
        margin:2
    },
    btnText:{
        color:'#fff',
        textAlign:'center',
        fontSize:24,
    }
})
export default PrimaryButton