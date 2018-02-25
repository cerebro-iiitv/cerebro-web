import React from 'react';
import {connect} from 'react-redux';
import * as firebase from "firebase";

import Header from './header';
import Countdown from './Countdown';
import Event from './Event';
import {signedIn, signedOut} from "../actions/authActions";

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
      <Event />
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
