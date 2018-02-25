import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Icons from 'uikit/dist/js/uikit-icons';
import UIKit from 'uikit';
import * as firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';
import {getStore} from "./store";
import Root from './components';
import Header from './components/header';
import Team from './components/Team';
import 'uikit/dist/css/uikit.min.css'
import './css/index.css';

// UIKit
UIKit.use(Icons);

// Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB22-DZ_PvhTJsA-PPf8Vs--fmcCixL-YQ",
  authDomain: "cerebro-2018-f1052.firebaseapp.com",
  databaseURL: "https://cerebro-2018-f1052.firebaseio.com",
  projectId: "cerebro-2018-f1052",
  storageBucket: "cerebro-2018-f1052.appspot.com",
  messagingSenderId: "1059299836137"
});

// Store
const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Root}/>
          <Route exact path={'/dashboard'} render={() => <div>User dashboard will render here.</div>}/>
          <Route exact path={'/timeline'} render={() => <div>Timeline will render here.</div>}/>
          <Route exact path={'/contact'} render={() => <div>Contact information will render here.</div>}/>
          <Route exact path={'/sponsors'} render={() => <div>Sponsors will render here.</div>}/>
          <Route exact path={'/events/:id'} render={() => <div>Individual events will render here.</div>}/>
          <Route exact path={'/team'} component={Team}/>
        </Switch>
        {/* TODO: Add footer */}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
