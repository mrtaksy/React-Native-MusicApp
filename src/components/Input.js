import React from 'react';

import {View, TouchableOpacity, Text, StyleSheet,TextInput} from 'react-native';

function Input (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>

      <TextInput 
      placeholder={props.placeholder}
      onChangeText={(value)=>props.onText(value)}
       />

    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  inputContainer: {  
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius:10,
  },
  label:{
    color:'white',
    fontWeight:'bold',
    marginLeft:10,
  },
  container: {
    backgroundColor: '#cf3918',
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
});
export default Input;