/* @flow */

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Login from '../login/login';
import HomePage from '../homePage/HomePage';

export default class App extends Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene
            component={Login}
            hideNavBar={true}
            initial={true}
            key='Authentication'
            title='Entrar'
          />
          <Scene
            component={HomePage}
            hideNavBar={true}
            key='HomePage'
            title='Home Page'
          />
        </Scene>
      </Router>
    );
  }
}
