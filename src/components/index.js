import React from 'react';
import {connect} from 'react-redux';
import * as firebase from "firebase";

import Header from './header';
import Countdown from './Countdown';
import {signedIn, signedOut} from "../actions/authActions";
import '../css/index.css'

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.signedIn(user);
      } else {
        this.props.signedOut();
      }
    });
  }

  render() {
    return <div>
      <Header/>
      <Countdown />
    </div>
  }
}

const mapStateToProps = state => {
  return {}
};

export default connect(mapStateToProps, {
  signedIn,
  signedOut
})(Root);
