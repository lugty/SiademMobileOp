import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class HomePage extends Component{

  userLogout(){
    Actions.Authentication();
  }

  render(){
    return(
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
