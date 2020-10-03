import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Checkbox } from 'react-native-paper';

export default class ToppingsSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        olives : false,
        pepperonis : false
      }
      this.preferences = new Set();
    }
  
    render() {
      const { olives, pepperonis } = this.state;
      return (
        <View style={styles.container}>
            <Text>Toppings Select</Text> 
            <Checkbox
              status={olives ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ olives: !olives }); this.addPreference('olives'); }}
            />
            <Checkbox
              status={pepperonis ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ pepperonis: !pepperonis }); this.addPreference('pepperonis'); }}
            />     
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