import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Icons from 'uikit/dist/js/uikit-icons';
import UIKit from 'uikit';
import * as firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';
import {getStore, getState} from "./store";
import 'uikit/dist/css/uikit.min.css'
import './css/index.css';

// Components
import Root from './components';
import Header from './components/header';
import Team from './components/Team';
import Dashboard from './components/dashboard';
import Event from './components/event';
import Timeline from './components/timeline';

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
          <Route exact path={'/dashboard'} render={() => {
            if (getState().auth.user) {
              return <Dashboard/>
            } else {
              return <Redirect to={'/'}/>
            }
          }}/>
          <Route exact path={'/timeline'} component={Timeline}/>
          <Route exact path={'/contact'} render={() => <div>Contact information will render here.</div>}/>
          <Route exact path={'/sponsors'} render={() => <div>Sponsors will render here.</div>}/>
          <Route exact path={'/events/:id'} component={Event}/>
          <Route exact path={'/team'} component={Team}/>
        </Switch>
        {/* TODO: Add footer */}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
