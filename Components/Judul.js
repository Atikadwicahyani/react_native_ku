import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return{
			<Text style={salon.judul}> {this.props.title}</Text>
		}
	}

}
const salon ={
	judul:{
		color:"#7D1313",
		fontSize: 75,
		fontWeight:'Bold'
	}
}
export default Judul;