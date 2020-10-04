import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput, SectionList, Button} from 'react-native';

export default class Room extends React.Component {
    constructor(props) {
      super(props);
      this.state = {roomId: ''};
      this.users = [];
      this.orders = [];
    }
  
    render() {
      //this.props.route.params.socket.emit('getRoomUsers');
      return (
        <View style={styles.container}>
            <Text style={{marginTop:+50}}>{this.state.roomId}</Text>    
            <SectionList sections={
                [{
                  title: "Users",
                  data: this.users
                }]
              }
              renderItem={({ item }) => <Text>{item}</Text>}
            />
            <Button title="Generate Order" onPress = { () => {this.props.navigation.navigate('Order', {name: this.props.route.params.name, socket: this.props.route.params.socket, pizza: pizza(this.orders)})}}></Button>
            
        </View>
      );
    }

    componentDidMount() {
      
      this.props.route.params.socket.on('roomUsers', ({room, users}) => {
        console.log(room, users);
        this.setState({roomId: room});
        this.users = [];
        this.orders = [];
        for (let user of users){
          this.users.push(user.username);
          this.orders.push(user.pizza);
        }
        console.log(this.state.roomId, this.users);
      })
      setTimeout(() => {
        this.props.route.params.socket.emit('getRoomUsers');
      }, 1000)
      this.props.route.params.socket.emit('getRoomUsers');

    }
}
function pizza(arr) {
  let hash = new Map();
  for(let i = 0;i < arr.length; i++) {
  	let hashcode = hashCode(arr[i]); 
    let value = hash.get(hashcode);
    console.log(value);
    if(value == undefined) {
    	hash.set(hashcode, 1);
    } else {
    	hash.set(hashcode, value + 1);
    }
  }
  return hash;
}

function hashCode(set) {
	return Array.from(set).sort().join(', ');
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