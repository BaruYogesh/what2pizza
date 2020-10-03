import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Button } from 'react-native';
import io from "socket.io-client";

export default class ToppingsSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        olives : false,
        pepperonis : false,
        sausage: false,
        mushrooms: false
      }
      this.preferences = new Set();
    }
  
    render() {
      const { olives, pepperonis, sausage, mushrooms } = this.state;
      return (
        <View style={styles.container}>
            <Text>Select Your Toppings</Text> 
            <Checkbox
              status={olives ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ olives: !olives }); this.addPreference('olives'); }}
            />
            <Text>Olives</Text>
            <Checkbox
              status={pepperonis ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ pepperonis: !pepperonis }); this.addPreference('pepperonis'); }}
            /> 
            <Text>Pepperoni</Text>

            <Checkbox
              status={sausage ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ sausage: !sausage }); this.addPreference('sausage'); }}
            />
            <Text>Sausage</Text>

            <Checkbox
              status={mushrooms ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ mushrooms: !mushrooms }); this.addPreference('mushrooms'); }}
            />
            <Text>Mushrooms</Text> 

            <Button title="Go to Room" onPress = { () => {
            this.props.navigation.navigate('Room', {name: this.state.name, socket: io("http://192.168.0.158:3001")});}}></Button>
        </View>
        
      );
    }
    addPreference(topping) {
      if(this.preferences.has(topping)) {
        this.preferences.delete(topping);
      } else {
        this.preferences.add(topping);
      }
      console.log(this.preferences);
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