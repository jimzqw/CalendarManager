import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCM5SZR_uotVG_ZylzTqRmGEWVb-wsOUiw',
    authDomain: 'numeric-dialect-218321.firebaseapp.com',
    databaseURL: 'https://numeric-dialect-218321.firebaseio.com',
    projectId: 'numeric-dialect-218321',
    storageBucket: 'numeric-dialect-218321.appspot.com',
    messagingSenderId: '760573775126'
    };

    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
