import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import PrimaryButton from '../components/PrimaryButton';

const HomeScreen = props => {
  

  return  <SafeAreaView style={styles.screen}>
                <View style={styles.innerScreen}>
                    <Text style={styles.title}> Home of recipes of the most Delicious Dishes</Text>
                    <PrimaryButton onPress={()=>props.navigation.navigate('Meals')} styling={styles.btn}>
                        Get Started
                    </PrimaryButton>
                </View>
            </SafeAreaView>
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'#D7CEB2',
  },
  innerScreen:{
    alignItems:'center',
    justifyContent:'space-between',
    padding:30,
    flex:1, width:'100%'
  },
  title:{
    color:'#66635B',
    fontSize:54,
    fontWeight:'bold',
    letterSpacing:2,
    textAlign:'center'
  },
  btn:{
    width:'90%', height:50,
    justifyContent:'center',
    backgroundColor:"#4C5760"
  }
});
export default HomeScreen
