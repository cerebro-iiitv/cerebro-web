import React from 'react';
import {connect} from 'react-redux';
import * as firebase from "firebase";

class Root extends React.Component {

  render() {
    return <div>
      This is index route
    </div>
  }
}

export default connect()(Root);
