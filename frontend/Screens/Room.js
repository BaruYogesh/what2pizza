import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput, SectionList, Button} from 'react-native';

export default class Room extends React.Component {
    constructor(props) {
      super(props);
      this.state = {roomId: '', isOwner: false};
      this.users = [];
      this.orders = [];
    }
  
    render() {
      //this.props.route.params.socket.emit('getRoomUsers');
      return (
        <View style={styles.container}>
            <Text style={{marginTop:+100, marginLeft: +50, fontSize: 24, color: 'white', fontWeight: 'bold'}}>Room Code: {this.state.roomId}</Text>
            <Text style={{marginLeft: +50, fontSize: 20, color: 'white', fontWeight: 'bold'}}>Users:</Text>    
            <SectionList sections={
                [{
                  title: "Users",
                  data: this.users
                }]
              }
              renderItem={({ item }) => <Text style={{marginLeft: +50, fontSize: 20, color: 'white', fontWeight: 'bold'}}>{item}</Text>}
            />
            <Button color = 'darkred' title="Generate Order" disabled={!this.state.isOwner} onPress = { () => {this.props.navigation.navigate('Order', {name: this.props.route.params.name, socket: this.props.route.params.socket, pizza: pizza(this.orders)})}}></Button>
            
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

          if (this.props.route.params.socket.id === user.id && user.roomOwner){
            this.setState({isOwner: true})
          }
        }
        console.log(this.state.roomId, this.state.isOwner);
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
      alignItems: 'left',
      justifyContent: 'left', 
      backgroundColor: '#444444'
    },
    buttons: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',    
    }
  });