import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
    
      <View style={styles.container}>
      <RootStack>
      <HomeScreen>
      <Text style={styles.welcome}>
      Welcome To React Native!
      </Text>
      <Text style={styles.instructions}>
      Nama : Atika Dwi Cahyani
      </Text>
      <Text style={styles.instructions}>
      Kelas : XI RPL 4
      </Text>
      <Text style={styles.instructions}>
      No.Absen :06
      </Text>
      <HomeScreen/>
      <RootStack/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#455a64',
  },
  welcome:{
    fontSize: 20,
    textAlign:'center',
    margin: 10,
  },
  instructions:{
    textAlign:'center',
    color:'#333333',
    marginBottom: 5,
  },
});
