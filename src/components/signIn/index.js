import React from 'react';
import {connect} from 'react-redux';
import firebaseui from 'firebaseui';
import * as firebase from 'firebase';

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    if (!window.authUi)
      window.authUi = new firebaseui.auth.AuthUI(firebase.auth());

  }

  componentDidMount() {
    let uiConfig = {
      signInSuccessUrl: '#',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    // The start method will wait until the DOM is loaded.
    window.authUi.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return <div>
      <div id={'firebaseui-auth-container'}>
      </div>
    </div>
  }
}

export default connect()(SignInComponent);
