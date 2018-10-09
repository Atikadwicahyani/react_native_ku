import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return (
            <Text style= {salon.Judul}>
             {this.props.title}</Text>
        );
    }
}

const salon = {
    Judul: {
        color: '#f00',
        fontSize: 50,
        backgroundColor: '#808080',
        textAlign:'center'
    }
}
export default Judul;