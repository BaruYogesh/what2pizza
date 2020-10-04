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
          <Text style={signin_style.title}>what2pizza</Text>
          <Text>Please Enter Your Name</Text>    

        <View style = {signin_style.input}>
          <TextInput
              style={signin_style.input}
              placeholder="Name"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
          />
        </View>

          <Button
          color = 'darkred'
          title="Sign In" 
          onPress = { () => {
            this.props.navigation.navigate('JoinCreateRoom', {name: this.state.name, socket: io("https://what2pizza.herokuapp.com/")});}}></Button>
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
    marginBottom: 10,
    height: 40,
    width: 300,
    backgroundColor:'#bebebe',
    textAlign: "center"
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
    color: 'darkred'  
  },
  title: {
    fontSize: 28,
    marginBottom: 40
  }
});
const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#444444'
  },
});