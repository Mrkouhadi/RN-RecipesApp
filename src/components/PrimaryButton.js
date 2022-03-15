import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

const PrimaryButton = props => {
  return <TouchableOpacity onPress={props.onPress}
                 style={{...styles.btnContainer, ...props.styling}}>
            <Text style={styles.btnText}>{props.children}</Text>
        </TouchableOpacity>
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