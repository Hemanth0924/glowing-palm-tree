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
  import {DropDownPicker} from "react-native-dropdown-picker";
  import Permissions from "react-native-permissions";
  import {Card} from 'react-native-paper';
  import {BottomTabNavigator} from 'react-navigation';
  import {createAppContainer, createSwitchNavigator} from 'react-navigation';

  export default class Write extends React.Component{
   constructor(props){
          super(props);
          this.state = {

            
          }
         
    }
    render(){
            
      return(
        <View style = {styles.container}>
          <AppContainer/>
          
          <ScrollView>
          <TextInput style = {styles.product}></TextInput>
          </ScrollView>

          <ScrollView>
          <TextInput style = {styles.reasons}></TextInput>
          </ScrollView>
          
        </View>
        
      )
    }
  }

  const AppNavigator = createBottomTabNavigator({
    HomeScreen: HomeScreen,
    Write:Write,
    RecentlyDeleted:RecentlyDeleted,
    
  });

  
  const AppContainer = createAppContainer(AppNavigator);

  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#ADD8E6",
      alignItems:"center",
      justifyContent:"center",
    },

    product:{
      color:"#000000",
      fontSize:12,
      fontFamily:"cursive",
      paddingLeft:10,
       marginRight:200
    },
    reasons:{
      color:"#000000",
      fontSize:12,
      fontFamily:"cursive",
      paddingLeft:10,
       marginLeft:200,
    },
});