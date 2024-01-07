import React from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
  } from "react-native";

  import {RFValue} from "react-native-responsive-fontsize";
  import {Card} from 'react-native-paper';
  import {BottomTabNavigator} from 'react-navigation';
  import {createAppContainer, createSwitchNavigator} from 'react-navigation';

  export default class Logout extends React.Component{
      constructor(){
          super();
          this.state = {}
      }
      render(){
          return(
              <View style = {styles.container}>
                 <TouchableOpacity style={styles.button} onPress={()=> {this.props.navigation.navigate('HomeScreen')}}> ▶</TouchableOpacity>
              </View>
          )
      }
  }


  const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        borderWidth:3,
        borderRadius:20,
        width:60,
        alignItems:"center",
        alignSelf:"center",
        margin:20,
        padding:10,
        fontSize:15,
        backgroundColor:"#FF0000",
        
    },

});