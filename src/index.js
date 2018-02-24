import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Icons from 'uikit/dist/js/uikit-icons';
import UIKit from 'uikit';
import * as firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';
import {getStore} from "./store";
import Root from './components';
import Team from './components/Team';
import 'uikit/dist/css/uikit.min.css'
import './css/index.css';

// UIKit
UIKit.use(Icons);

// Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDtC9Ob9VE2e5fVOrTD3a0khcBo2rRY8jM",
  authDomain: "cerebro-iiitv-2018.firebaseapp.com",
  databaseURL: "https://cerebro-iiitv-2018.firebaseio.com",
  projectId: "cerebro-iiitv-2018",
  storageBucket: "cerebro-iiitv-2018.appspot.com",
  messagingSenderId: "765373525937"
});

// Store
const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Root} />
        <Route exact path='/team' component={Team} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
