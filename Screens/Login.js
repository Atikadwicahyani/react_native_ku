import React, {Component} from 'react';
import{Platform, StyleSheet, Text, View, Image,  TextInput, TouchableOpacity} from 'react-native';


export default class Login extends Component<{}> {
  render() {
    return (
    	<View style={styles .container}>
     	 <Image 
       style={{width:70, height:50}}
      	source={require('./logo.png')}/>
   	
   		<TextInput style={styles.inputBox} 
         placeholder="Email atau Nomor Telepone"
         />
         <TextInput style={styles.inputBox} 
         placeholder="Password"
         secureTextEntry={true}
         />

         <TouchableOpacity style={style.button}>
           <Text style={styles.buttonText}>MASUK</Text>
         </TouchableOpacity>

          <TouchableOpacity>
          <Text>Lupa Kata Sandi?</Text>
          </TouchableOpacity>
        </View>
    	)
   }
}
 const styles = StyleSheet.create({
container : {
  flex: 1,
  backgroundColor:'#ffffff',
  justifyContent:'center',
  alignItems: 'center'
},
inputBox:{
  width: 300,
  fontSize:13,
  color:'#000000'
},
button:{
  width:250,
  height: 40,
  alignItems'center',
  backgroundColor:'#1c313a',
  marginVertical:10,
  paddingHorizontal:80
},

buttonText:{
  fontSize: 13,
  color:'#f7f7f7',
}
});