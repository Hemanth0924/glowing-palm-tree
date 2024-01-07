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
  import * as Font from "expo-font";

  import * as SplashScreen from 'expo-splash-screen';
  SplashScreen.preventAutoHideAsync();

  const appIcon = require("../assets/signin.png");

  export default class SignIn extends React.Component{
      constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            fontsLoaded:false,
            usersLoggedIn:false,
        };
      }
      

      async_loadFontsAsync(){
          await Font.loadAsync(customFonts);
          this.setState({fontsLoaded:true});
      }

  }