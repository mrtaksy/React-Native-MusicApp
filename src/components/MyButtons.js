import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function MyButtons(props) {
  return (
  
        <TouchableOpacity style={styles[props.theme]}>
        <Text style={[styles.buttonConta,{color:props.color}]}>{props.title}</Text>
        </TouchableOpacity> 
          
      );      

}   
     

    const styles=StyleSheet.create({
        myBTN_0:{
        backgroundColor:'#ecf0f1',
        alignItems:"center",
          margin:20,
         padding:10,
         borderRadius:20,
      },

      myBTN_1:{
        
        alignItems:"center",
        margin:10,
       
      },
      myBTN_2:{
        alignItems:"center",
        margin:10,
        padding:0,
      },
      
      buttonConta:{
        fontSize:15,        
        
      }
    });
    
    export default MyButtons;