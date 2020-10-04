import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput, SectionList, Button} from 'react-native';

export default class Order extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ''};
      let hash = this.props.route.params.pizza;
      const iter = hash.entries();
      let next = iter.next();
      this.orders = [];
      while(next.value != undefined) {
        this.orders.push((next.value[1]/2.0).toString() + " pizzas with ingredients " + next.value[0]);
        next = iter.next();
      }      
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={{marginTop:50, fontWeight: 'bold'}}>Final Order</Text>
            <SectionList sections={
                [{
                  title: "Final Order",
                  data: this.orders
                }]
              }
              renderItem={({ item }) => <Text>{item}</Text>}
            />
            <Button color ='darkred' title="Place Order" onPress = { () => {this.props.navigation.navigate('Confirm', {order: this.orders})}}></Button>
                 
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
      backgroundColor: '#444444'
    }
  });