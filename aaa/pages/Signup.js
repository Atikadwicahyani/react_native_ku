import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Logo from '../Components/Logo';
import Form from '../Components/Form';
   
import {Router, Stack, Scene} from 'react-native-router-flux';

export default class Signup extends Component<{}> {
	goBack() {
		Actions.pop();
	}

	render() {
		return (
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity on press={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
container : {
  backgroundColor:'#0d47a1',
  flex: 1,
  alignItems:'center',
  justifyContent:'center'
},
signupTextCont: {
	flexGrow: 1,
  alignItems:'flex-end',
  justifyContent:'center',
  marginVertical: 16,
  flexDirection:'row'
},
signupText: {
	color:'rgba(255, 255, 255, 0.6)',
	fontSize:16
},
signupButton: {
	color:'#ffffff',
	fontSize:16,
	fontWeight:'500'
}
});