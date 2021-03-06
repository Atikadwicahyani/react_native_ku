import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Form extends Component<{}> {
  render() {
    return (
    	<View style={styles .container}>
 			  <TextInput style={styles.inputBox} 
         underlineColorAndroid='rgba(0,0,0,0)' 
         placeholder="Email"
         placeholderTextColor ="#ffffff"
         />
         <TextInput style={styles.inputBox} 
         underlineColorAndroid='rgba(0,0,0,0)' 
         placeholder="Password"
         secureTextEntry={true}
         placeholderTextColor ="#ffffff"
         />

         <TouchableOpacity style={style.button}>
           <Text style={styles.buttonText}>{this.props.type}</Text>
         </TouchableOpacity>
        </View>
    	)
   }
}
const styles = StyleSheet.create({
container : {
  flex: 1,
  justifyContent:'center',
  alignItems: 'center'
},
inputBox:{
  width: 300,
  backgroundColor:'#1c313a',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:16,
  color:'#ffffff',
  marginVertical:16
},
button:{
  backgroundColor:'#1c313a',
  borderRadius:25,
  marginVertical:16,
  paddingVertical:12
},

buttonText:{
  fontSize: 16,
  fontWeigth:'200',
  color:'#ffffff',
  textAlign:'center'

}


});