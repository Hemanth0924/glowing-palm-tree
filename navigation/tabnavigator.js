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
    Alert,
  } from "react-native";

  import firebase from 'firebase';
  import {RFValue} from "react-native-responsive-fontsize";
  import {DropDownPicker} from "react-native-dropdown-picker";
  import Permissions from "react-native-permissions";
  import {Card} from 'react-native-paper';
  import {BottomTabNavigator} from 'react-navigation';
  import {createAppContainer, createSwitchNavigator} from 'react-navigation';
  import {NavigationContainer} from '@react-navigation/native';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  import Ionicons from 'react-navigation-vector-icons/Ionicons';
import App from "../screens/app";

  const tab = createBottomTabNavigator();
  
  export default class BottomTabNavigator extends React.Component{
    render(){
      return(
        <NavigationContainer>
          <Tab.Navigator
          screenOptions ={({route}) =>({
          tabBarIcon:({focused,color,size}) =>{
            let iconName;

            if(route.name === 'HomeScreen'){
              iconName = 'Home';
            }
            else if(route.name === 'Write'){
              iconName = 'Write';
            }
            else{
              iconName = 'Recently Deleted'
            }

            return <Ionicons name={iconName} size={size} color ={color}/>
          },
          })} 

          tabBarOptions={{

            activeTintColor:'#FFFFFF',
            inactiveTintColor:'#000000',

            style:{
              height:130,
              borderTopWidth:0,
              backgroundColor:'#5653D4',
            },
            labelStyle:{
              fontSize:20,
              fontFamily:'Helvitica 14 bold',
            },

            labelPosition:'beside-icon',
            tabStyle:{
              marginTop:25,
              marginLeft:10,
              marginRight:10,
              borderRadius:30,
              borderWidth:2,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'#5653D4',
            }

            }}>
              
            <Tab.Screen name = 'Home'  component={HomeScreen}/>
            <Tab.Screen name = 'Write'  component={Write}/>
            <Tab.Screen name = 'Recently Deleted'  component={RecentlyDeleted}/>
          
          </Tab.Navigator>

          
        </NavigationContainer>
      );
      
    }
    
    
  }