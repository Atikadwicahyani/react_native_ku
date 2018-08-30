import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return (
            <Text style= {salon.Judul}
                >BIODATA</Text>
        )
    }
}

const salon = {
    Judul: {
        color: '#f00',
        fontSize: 50,
        backgroundColor: '#808080'
    }
}
export default Judul;