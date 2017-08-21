/* @flow */

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

export default class App extends Component{
  render(){
    return(
      <Router>
        <Scene
          component={Autentication}
          hideNavBar={true}
          initial={true}
          key='Authentication'
          title='Authentication'
        />
        <Scene
          component={HomePage}
          hideNavBar={true}
          key='HomePage'
          title='Home Page'
        />
      </Router>
    );
  }
}
