import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput, SectionList} from 'react-native';

export default class Room extends React.Component {
    constructor(props) {
      super(props);
      this.state = {roomId: ''};
      this.users = [];
    }
  
    render() {
      //this.props.route.params.socket.emit('getRoomUsers');
      return (
        <View style={styles.container}>
            <Text style={{marginTop:+50}}>{"JOIN:", this.state.roomId}</Text>    
            <SectionList sections={
                [{
                  title: "Users",
                  data: this.users
                }]
              }
              renderItem={({ item }) => <Text>{item}</Text>}
            />
        </View>
      );
    }

    componentDidMount() {
      
      this.props.route.params.socket.on('roomUsers', ({room, users}) => {
        console.log(room, users);
        this.setState({roomId: room});
        this.users = []
        for (let user of users){
          this.users.push(user.username);
        }
        console.log(this.state.roomId, this.users);
      })
      setTimeout(() => {
        this.props.route.params.socket.emit('getRoomUsers');
      }, 1000)
      this.props.route.params.socket.emit('getRoomUsers');

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