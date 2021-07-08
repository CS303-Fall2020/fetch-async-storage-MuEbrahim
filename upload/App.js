import React, {useState} from 'react';
import { StyleSheet, Text, View ,TextInput, Button,FlatList, TouchableOpacity,Alert,Keyboard, TouchableWithoutFeedback} from 'react-native';
import Navigator from './route/homeStack'


export default function App() {
  return (
      <Navigator/>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding:20
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  header:{
    backgroundColor:"white",
    height:40,
    marginTop:15,
    marginBottom:15,
    padding:10,
    fontSize:30,
    alignItems:"center"
  }
});
