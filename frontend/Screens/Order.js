import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput, SectionList, Button} from 'react-native';

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// )

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
      console.log(this.orders);
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={{marginTop:50, fontWeight: 'bold', textAlign:'center'}}>Order</Text>
            <SectionList sections={
                [{
                  title: "Final Order",
                  data: this.orders
                }]
              }
              renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
            <Button color ='darkred' title="Place Order" onPress = { () => {this.props.navigation.navigate('Confirm', {order: this.order})}}></Button>
                 
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
    },
    item: {
      marginTop: 50,
      fontSize: 25, 
      textAlign:'center'
    },
    header: {
      fontSize: 30
    }
  });