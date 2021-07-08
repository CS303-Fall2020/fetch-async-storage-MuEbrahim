import React, {useState} from 'react';
import { StyleSheet, Text, View , TouchableWithoutFeedback,Button,TextInput} from 'react-native';

export default function App({navigation}) {
    const x = navigation.getParam('item');
    console.log(navigation.getParam('item'))
    const y = (value)=>{
        x.title=value;
        // navigation.getParam('EditText')(x)
    }
    return(
            <View style={styles.container}>
                <TextInput style={styles.TextIn} multiline={true} onChangeText={y}>{x.title}</TextInput>
                <Button title='Edit' onPress={()=>{
                    navigation.navigate('TodoList',x);
                }}></Button>
            </View>
    
)}
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
      },
    note:{
        textDecorationLine:'none',
        marginTop:20,
        color:'white',
        borderWidth:1,
        height:70,
        borderColor:'white',
        padding:10,
        fontWeight:'bold',
        fontSize:20
    },
    TextIn:{
        backgroundColor:'white'
    }
})
