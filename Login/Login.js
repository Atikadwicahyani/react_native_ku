import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import LoginForm from ('./LoginForm');
export default class Login extends Component<{}> {
	render() {
    return (
    	   <View style={style.container}>
    	   <View style={style.logoContainer}>
           <Image 
           style = {styles.logo}
           source= {require('./logo.jpg')}/>
           <Text style={style.title}>An App made for githubusing React Native</Text>
    	   </View>
           <View style={style.formContainer}>
           <LoginForm/>
           </View>
           </View>
    		
    	);
}
}
 const Styles = StyleSheet .create({
 	container : {
 		backgroundColor :'#455a64',
 		flex:1,
 		alignItem:'center',
 		justifyContent :'center'
 	},
 	
 	logoContainer:{
    alignItem:'center',
    flexGrow:1,
    justifyContent :'center'
    },
    logo:{
        width:100,
        height: 100
 	},
    title: {
        color:'#FFFF',
        marginTop:10,
        width:160,
        TextAlign:'center'
    }
 });
