import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Main from './Main';
import reducers from './src/reducers';

export default class App extends React.Component 
{
  componentWillMount()
  {
    var config = {
      apiKey: "AIzaSyDnnyrplHL_JMzCGIIfzhlwUzQ3C6lXJpg",
      authDomain: "manager-99c63.firebaseapp.com",
      databaseURL: "https://manager-99c63.firebaseio.com",
      projectId: "manager-99c63",
      storageBucket: "",
      messagingSenderId: "110276529893"
    };
    firebase.initializeApp(config);  
  }

  render() 
  {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={ store }>
        <View style={{flex:1}}>
          <Main />
        </View>
      </Provider>
    );
  }
}