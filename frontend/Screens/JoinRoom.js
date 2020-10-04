import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native';

export default class JoinRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', wrongCode: false};
    }
  
    render() {
      return (
        <View style={styles.container}> 
            <Text>Enter Room ID</Text> 

        <View style = {signin_style.input}>
            <TextInput
              //style={signin_style.input}
              placeholder="Code"
              onChangeText={(code) => this.setState({code})}
              value={this.state.code}
          />
        </View>

          <Button color = 'darkred' title="GO" onPress = { () => {this.props.route.params.socket.emit('roomExists', this.state.code)}}></Button> 
          <Text>{this.state.wrongCode ? "This room does not exist!" : ""}</Text>
        </View>
      );
    }

    componentDidMount() {
      this.props.route.params.socket.on('roomExists', roomExists => {
        if (!roomExists){
          console.log('room doesn\'t exist!');
          this.setState({wrongCode: true})
          setTimeout(()=>{this.setState({wrongCode: false})}, 2500);
        } else {
          this.props.route.params.socket.emit('joinRoom', { username: this.props.route.params.name, room: this.state.code, pizza: {}, roomOwner: false })
          this.props.navigation.navigate('ToppingsSelect', {name: this.props.route.params.name, socket: this.props.route.params.socket})
        }
      })
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
    backgroundColor:'#bebebe'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
    color: 'darkred'  
  }
});

const styles = StyleSheet.create({
    container: {
      marginTop: -50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: '#444444'
    }
  });