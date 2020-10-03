import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native';

export default class JoinRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ''};
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text>Enter Room ID</Text> 
            <TextInput
              //style={signin_style.input}
              placeholder="Code"
              onChangeText={(code) => this.setState({code})}
              value={this.state.code}
          />    
          <Button title="GO" onPress = { () => {this.props.navigation.navigate('ToppingsSelect')}}></Button> 
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
    }
  });