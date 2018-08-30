import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul'

export default class App extends Component {
  render() {
    return (
      <View>
        <Judul></Judul>
        <Text>Nama: Atika Dwi Cahyani </Text>
        <Text>Kelas: XI_RPL 4 </Text>
        <Text>No.Absen: 06 </Text>
        <Image style={{width: 400, height:500}}
        source={require('./1.jpeg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
