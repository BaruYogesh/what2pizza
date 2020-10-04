import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native';

export default class JoinCreateRoom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ''};
    }
  
    render() {
      return (
        <View style={styles.container}>
          
            <Text style={{marginTop:50}}>Join or Create a Room</Text> 

          <View style = {styles.buttons}>
            <Button title="Create Room" onPress = { () => {
              this.props.route.params.socket.emit('getroomname');
              
              this.props.navigation.navigate('ToppingsSelect', {name: this.props.route.params.name, socket: this.props.route.params.socket})}}></Button>    
            </View>
            
            <View style = {styles.buttons}>
            <Button title="Join Room" onPress = { () => {this.props.navigation.navigate('JoinRoom', {name: this.props.route.params.name, socket: this.props.route.params.socket})}}></Button>
            </View>
        
        </View>
      );
    }

    componentDidMount() {
      //console.log(this.props);

      this.props.route.params.socket.on('createRoomName', roomName => {
        this.props.route.params.socket.emit('joinRoom', { username: this.props.route.params.name, room: roomName, pizza: {}, roomOwner: true })
      })
      
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: -50,
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center', 
      backgroundColor: 'white'
    },
    buttons: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',    
    } 
  });