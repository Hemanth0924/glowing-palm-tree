import React from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Alert,
  } from "react-native";

  import firebase from 'firebase';
  import {RFValue} from "react-native-responsive-fontsize";
  import {DropDownPicker} from "react-native-dropdown-picker";
  import Permissions from "react-native-permissions";
  import {Card} from 'react-native-paper';
  import {BottomTabNavigator} from 'react-navigation';
  import {createAppContainer, createSwitchNavigator} from 'react-navigation';
  import {createStackNavigator} from 'react-navigation/stack';
  import {TabNavigator} from "./tabnavigator";

  const Stack = createStackNavigator();

  const StackNavigator = () =>{
    return(
      <Stack.Navigator

      initialRouteName ="Home"

      screenOptions ={{
        headerShown:false
      }}
      >
      <Stack.Screen name ="Home" component ={TabNavigator}/>
        
      </Stack.Navigator>
    );
  };

  export default StackNavigator;