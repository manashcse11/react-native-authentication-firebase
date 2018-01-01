import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB_wXZk8XtE9Ha0ltCKOdJAUCvTJme6Ze4',
      authDomain: 'authentication-82e03.firebaseapp.com',
      databaseURL: 'https://authentication-82e03.firebaseio.com',
      projectId: 'authentication-82e03',
      storageBucket: 'authentication-82e03.appspot.com',
      messagingSenderId: '165601858905'
    });
  }
  render () {
    return (
      <View>
        <Header headerText={'Auth'}/>
        <LoginForm />
      </View>
    );
  };
}

export default App;