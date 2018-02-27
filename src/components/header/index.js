import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import * as firebase from "firebase";

import SignIn from '../signIn';
import {signedIn, signedOut} from "../../actions/authActions";
import {loadEvents} from "../../actions/eventActions";
import {loadUserPhone} from "../../actions/userPhoneReducer";
import './styles.css';

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
        if (!event.contact) {
          event.contact = [];
        }
        return event;
      });
      this.props.loadEvents(value);
    });
    // Manage team
    firebase.database().ref('/team/').on('value', snapshot => {
      console.log(snapshot.val());
    });
  }

  render() {
    return <div style={{height: '72px'}}>
      <nav className="uk-navbar-container uk-margin uk-dark uk-navbar-transparent" uk-navbar="mode: click">
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li className={[this.props.location.pathname === '/' ? 'uk-active' : ''].join(' ')}>
              <Link className={'heading-text'} to={'/'}><span>Home</span></Link></li>
            <li className={[this.props.location.pathname === '/timeline' ? 'uk-active' : ''].join(' ')}>
              <Link className={'heading-text'} to={'/timeline'}><span>Timeline</span></Link></li>
            <li className={[this.props.location.pathname === '/about' ? 'uk-active' : ''].join(' ')}>
              <Link className={'heading-text'} to={'/about'}><span>About</span></Link></li>
            <li className={[this.props.location.pathname === '/dashboard' ? 'uk-active' : ''].join(' ')}>
              {!this.props.signedIN ? <SignIn/> : <Link className={'heading-text'} to={'/dashboard'}>
                <span>Dashboard</span></Link>}</li>
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
