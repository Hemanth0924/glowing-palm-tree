import *  as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';

import SignInScreen from '../screens/SignIn';
import HomeScreen from '../screens/HomeScreen';

import firebase from 'firebase';
import{firebaseConfig} from '../config';


if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else{
   firebase.app(); 
}

const stack = createStackNavigator();

const stackNav = () =>{
    return(
        <stack.Navigator
        initialRouteName = "SignIn"
        screenOptions = {{
            headerShown:false,
            gestureEnabled:false,
            
        }}>

        <stack.Screen name = "SignIn" component = {'../screens/SignIn'}
          ></stack.Screen>    

        <stack.Screen name = "HomeScreen" component = {'../screens/HomeScreen'}
          ></stack.Screen>
                
        </stack.Navigator>
    );
};

export default function App(){
    return(
        <NavigationContainer>
            <stackNav/>
        </NavigationContainer>
    )
}
