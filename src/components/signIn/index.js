import React from 'react';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

class SignInComponent extends React.Component {

  componentDidMount() {
    let provider = firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(result);
      }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return <div>
      <div id={'firebase-login-scope'}>Login</div>
    </div>
  }
}

export default connect()(SignInComponent);
