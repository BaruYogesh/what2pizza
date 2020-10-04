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

          <Text style={{marginTop:50}}>Select Your Toppings</Text> 


         

          <View style={styles.row}>
            <Checkbox
              status={pepperonis ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ pepperonis: !pepperonis }); this.addPreference('pepperonis'); }}
            /> 
            <Text>Pepperoni</Text>
            </View>


            <View style={styles.row}>
            
            <Checkbox
              status={olives ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ olives: !olives }); this.addPreference('olives'); }}
            />
            <Text>Olives</Text>
            </View>

          <View style={styles.row}>
            <Checkbox
              status={sausage ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ sausage: !sausage }); this.addPreference('sausage'); }}
            />
            <Text>Sausage</Text>
          </View>

          <View style={styles.row}>
            <Checkbox
              status={mushrooms ? 'checked' : 'unchecked'}
              onPress={() => {this.setState({ mushrooms: !mushrooms }); this.addPreference('mushrooms'); }}
            />
            <Text>Mushrooms</Text> 
            </View>


            <Button title="Go to Room" onPress = { () => {

              
              console.log('sending:', this.preferences)
              this.props.route.params.socket.emit('addPizzaToUser', Array.from(this.preferences));
              this.props.navigation.navigate('Room', {name: this.props.route.params.name, socket: this.props.route.params.socket})}}></Button>
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
    row: {
      flex:1, 
      flexDirection: 'row', 
      alignItems: 'center',
      //alignSelf: 'center',
      //justifyContent: 'center'
    },
    container: {
      flex:1,
      flexDirection: 'column',
      //alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: '#444444'
    }
  });