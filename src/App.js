// App.js

import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import MessageBox from "./components/MessageBox";
class App extends Component {
  constructor(props) {
    super(props);
    var firebaseConfig = {
      apiKey: "AIzaSyCY9mOz37mW6-ZXpE7Z9sG6JLf3yyKF1wc",
      authDomain: "fir-7c303.firebaseapp.com",
      databaseURL: "https://fir-7c303-default-rtdb.firebaseio.com",
      projectId: "fir-7c303",
      storageBucket: "fir-7c303.appspot.com",
      messagingSenderId: "288628836325",
      appId: "1:288628836325:web:a4b297d91f04f9f0ce110c",
      measurementId: "G-ND7T455KQZ",
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
