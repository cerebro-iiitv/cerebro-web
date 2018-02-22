import React from 'react';
import {connect} from 'react-redux';
import firebaseui from 'firebaseui';
import * as firebase from 'firebase';

class SignInComponent extends React.Component {

  componentDidMount() {
    let uiConfig = {
      signInSuccessUrl: '/dashboard',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return <div>
      <div id={'firebaseui-auth-container'}>
      </div>
    </div>
  }
}

export default connect()(SignInComponent);
