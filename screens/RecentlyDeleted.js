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