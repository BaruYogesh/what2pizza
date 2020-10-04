import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput, SectionList} from 'react-native';

export default class Confirm extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props.route.params.order);
      this.state = {name: ''};
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={{marginTop:50, fontWeight: 'bold'}}>Your Order is on its way!</Text>
            <SectionList sections={
                [{
                  title: "Order",
                  data: this.props.route.params.order
                }]
              }
              renderItem={({ item }) => <Text>{item}</Text>}
            />      
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