import React, { Component } from './../node_modules/react';
import { StyleSheet, Text, View, TextInput, SectionList} from 'react-native';

export default class Room extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ''};
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text>{this.props.room}</Text>    
            {/* <SectionList>
              sections={
                [{
                  title: "Users"
                }]
              }
            </SectionList> */}
        </View>
      );
    }

    componentDidMount() {
      this.props.route.params.socket.emit('getRoomUsers');
      this.props.route.params.socket.on('roomUsers', ({room, users}) => {
        this.props.room = room;
        this.props.users = users;
      })
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