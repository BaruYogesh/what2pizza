import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native';
import io from "socket.io-client";


export default class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', socket: null};
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Sign In</Text>      
          <TextInput
              style={signin_style.input}
              placeholder="Name"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
          />
          <Button title="Sign In" onPress = { () => {
            this.props.navigation.navigate('JoinCreateRoom', {name: this.state.name, socket: io("http://192.168.0.158:3001")});}}></Button>
      </View>
    );
  }
}
const signin_style = StyleSheet.create({
  image: {
    marginTop: 25,
    width: 300,
    height: 60,
    resizeMode: 'stretch'
  },
  hightlight: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 10,
    height: 40,
    width: 300
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
  }
});
const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'white'
  },
});