import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native';

export default class JoinCreateRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ''};
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text>Join Create Room</Text>  
            <Button title="Create Room" onPress = { () => {this.props.navigation.navigate('ToppingsSelect')}}></Button>    
            <Button title="Join Room" onPress = { () => {this.props.navigation.navigate('JoinRoom')}}></Button>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: -50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: 'white'
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',    
    }
  });