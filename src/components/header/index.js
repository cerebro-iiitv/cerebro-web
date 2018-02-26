import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import * as firebase from "firebase";

import SignIn from '../signIn';
import {signedIn, signedOut} from "../../actions/authActions";
import {loadEvents} from "../../actions/eventActions";
import {loadUserPhone} from "../../actions/userPhoneReducer";

class Header extends React.Component {

  componentDidMount() {
    // Manage firebase OAuth
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref('/users/').on('value', snapshot => {
          if (!snapshot.hasChild(user.uid)) {
            firebase.database().ref('/users/' + user.uid).set({
              email: user.email,
              name: user.displayName,
              uid: user.uid
            })
          }
        });
        this.props.signedIn(user);
        this.props.loadUserPhone();
      } else {
        this.props.signedOut();
      }
    });
    // Manage event details
    firebase.database().ref('/events/').on('value', snapshot => {
      let value = snapshot.val();
      value = value.map(event => {
        if (!event.participants) {
          event.participants = {};
        }
        return event;
      });
      this.props.loadEvents(value);
    });
  }

  render() {
    return <div>
      <nav className="uk-navbar-container uk-margin uk-dark uk-navbar-transparent" uk-navbar="mode: click">
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li className={[this.props.location.pathname === '/' ? 'uk-active' : ''].join(' ')}>
              <Link to={'/'}>Home</Link></li>
            <li className={[this.props.location.pathname === '/timeline' ? 'uk-active' : ''].join(' ')}>
              <Link to={'/timeline'}>Timeline</Link></li>
            <li className={[this.props.location.pathname === '/events' ? 'uk-active' : ''].join(' ')}>
              <Link to={'/events'}>Events</Link></li>
            <li className={[this.props.location.pathname === '/about' ? 'uk-active' : ''].join(' ')}>
              <Link to={'/about'}>About Cerebro</Link></li>
            <li className={[this.props.location.pathname === '/dashboard' ? 'uk-active' : ''].join(' ')}>
              {!this.props.signedIN ? <SignIn/> : <Link to={'/dashboard'}>Dashboard</Link>}</li>
          </ul>
        </div>
      </nav>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    signedIN: state.auth.signedIn
  }
};

export default withRouter(connect(mapStateToProps, {
  signedIn, signedOut, loadEvents, loadUserPhone
})(Header));
