import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class Room extends React.Component {
    constructor(props) {
      super(props);
      this.state = {roomId: ''};
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text>Room { this.roomId } </Text>
                 
        </View>
      );
    }
    componentDidMount() {
      console.log("x");
      this.props.route.params.socket.emit('getRoomId');
      this.props.route.params.socket.on('getRoomId', (roomId) => {
        this.setState({roomId: roomId});
      })
      
      console.log(this.state);
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