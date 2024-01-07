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
  
  export default class HomeScreen extends React.Component{
      constructor(){
          super();
          this.state = {}
      

}
render(){

  if (this.state.fontsLoaded) {
    SplashScreen.hideAsync();
  let preview_images = {

    image1: require ("../assets/dog.jpg"),
    image2: require ("../assets/man.jpg"),
    image3: require ("../assets/woman.png"),
    image4: require ("../assets/woman2.png"),
    image5: require ("../assets/goku.png")
 };

    return(
        <View style = {styles.container}>
        <AppContainer/>
            <Text style = {styles.inputFont} Title>
                No More Broke!!!
            </Text>
            
            <TextInput style = {styles.username}></TextInput>

            <TouchableOpacity style={styles.button} onPress={()=> {this.props.navigation.navigate('LogoutScreen')}}> ▶</TouchableOpacity>
              
          <Card style = {styles.card}>
            <Text style = {styles.text} Recently Added></Text>
            <Text style = {styles.text} Products></Text>
          </Card>

          <View style = {styles.container}>
            Alert.alert("RateUs")
          </View>

         <TouchableOpacity style={styles.button2} onPress={()=> {this.props.navigation.navigate('HomeScreen')}}></TouchableOpacity>
         <TouchableOpacity style={styles.button3} onPress={()=> {this.props.navigation.navigate('Write')}}></TouchableOpacity>
         <TouchableOpacity style={styles.button4} onPress={()=> {this.props.navigation.navigate('RecentlyDeleted')}}></TouchableOpacity> 
         
        </View>
    );
}

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
    inputFont:{
      height:RFValue(40),
      borderColor: "#001D6E",
      borderWidth:RFValue(1),
      borderRadius:RFValue(1),
      alignItems:"center",
      justifyContent:"center",
      paddingLeft:RFValue(10),
      textColor:"#000000",
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
    card:{
      padding:5,
      height:window.innerHeight-20,
      justifyContent:"space-around",
      borderRadius:20,
      margin:10,
      backgroundColor:"#FFFF00",
    },
    text:{
      color:"#000000",
      fontFamily:"cursive",
      fontSize:5,
      marginLeft:5,
      marginBottom:30,
    },
    username:{
      color:"#000000",
      fontSize:12,
      fontFamily:"cursive",
      paddingLeft:10,
    },
    btn:{
      borderWidth:3,
      borderRadius:20,
      width:60,
      alignItems:"center",
      alignSelf:"center",
      margin:20,
      padding:10,
      fontSize:15,
      backgroundColor:"#FFFF00",
    },
    button2:{
      borderWidth:3,
      borderRadius:20,
      width:80,
      alignItems:"center",
      alignSelf:"center",
      margin:20,
      padding:10,
      fontSize:15,
      backgroundColor:"#FFFFFF",
      height:50,
    },
    button3:{
      borderWidth:3,
      borderRadius:20,
      width:100,
      alignItems:"center",
      alignSelf:"center",
      margin:20,
      padding:10,
      fontSize:15,
      backgroundColor:"#FFFFFF",
      height: 50,
    },
    button4:{
      borderWidth:3,
      borderRadius:20,
      width:120,
      alignItems:"center",
      alignSelf:"center",
      margin:20,
      padding:10,
      fontSize:15,
      backgroundColor:"#FFFFFF",
      height: 50,
    },
})