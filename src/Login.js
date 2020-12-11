import React from 'react';

import {View, Text, StyleSheet,TextInput,SafeAreaView,Image} from 'react-native';
import Input from './components/Input'
import MyButtons from './components/MyButtons'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    height: 175,
    width: 175,
    borderRadius:100
  }
});
function Login(){
  return (


<SafeAreaView style= {{flex:1}}>
<View style={{flex:1,backgroundColor:'#cf3918'}}>
   
   <View style={styles.container}>
      <Image style={styles.logo} source={require('./icons/icon.png')} />
    </View>

<Text style={{fontSize: 40 ,color:'white',paddingLeft:167}}>Giris</Text>

<Input
label='E-posta Adresi:'
placeholder='E-postanızı giriniz'
onText={(userMail)=>console.log(userMail)}
/>
<Input
label='Şifre:'
placeholder='Şifrenizi giriniz'
onText={(password)=>console.log(password)}
/>
<MyButtons title="Oturum Aç" theme="myBTN_0"  color='#cf3918'/>
<MyButtons title="Şifremi Unuttum!" theme="myBTN_1" color='#ecf0f1' />
<MyButtons title="Kayıt Ol" theme='myBTN_2' color='#ecf0f1' />

</View>
</SafeAreaView>

)
};
export default Login;

