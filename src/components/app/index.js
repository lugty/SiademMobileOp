/* @flow */

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import {ActivityIndicator, AsyncStorage} from 'react-native';

import Login from '../login/login';
import HomePage from '../homePage/HomePage';
import Profile from '../profile/Profile';
import Settings from '../settings/Settings';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      hasToken: false,
      isLoaded: false
    };
  }

  componentDidMount(){
    AsyncStorage.getItem('token').then((token) => {
      this.setState({hasToken: token !== null, isLoaded: true});
    });
  }

  render(){
    if(!this.state.isLoaded){
      return(
        <ActivityIndicator />
      );
    }else{
      return(
        <Router>
          <Scene key="root">
            <Scene
              component={Login}
              hideNavBar={true}
              initial={!this.state.hasToken}
              key='Authentication'
              title='Entrar'
            />
            <Scene
              key='tabbar'
              initial={this.state.hasToken}
              hideNavBar
              tabs={true}
              tabBarPosition="bottom"
              showLabel={true}
            >
              <Scene
                key="Home"
                title="Inicio"
                tabBarIcon={TabIcon}
                tabBarLabel="Inicio"
                navigationBarStyle={{backgroundColor: '#2196f3'}}
                titleStyle={{color: '#fff'}}
                >
                <Scene
                  component={HomePage}
                  key='Home'
                />
              </Scene>
              <Scene
                key="Profile"
                title="Perfil"
                tabBarIcon={TabIcon}
                tabBarLabel="Perfil"
                navigationBarStyle={{backgroundColor: '#2196f3'}}
                titleStyle={{color: '#fff'}}
                >
                <Scene
                  component={Profile}
                  key='Profile'
                />
              </Scene>


              <Scene
                key="Settings"
                title="Configuracion"
                tabBarIcon={TabIcon}
                tabBarLabel="Config"
                navigationBarStyle={{backgroundColor: '#2196f3'}}
                titleStyle={{color: '#fff'}}
                >
                <Scene
                  component={Settings}
                  key='Settings'
                />
              </Scene>


            </Scene>
          </Scene>
        </Router>
      );
    }
  }
}

const TabIcon = ({ selected, title }) => (
  <Text style={{ color: selected ? 'red' : 'black' }}>{ title }</Text>
);
