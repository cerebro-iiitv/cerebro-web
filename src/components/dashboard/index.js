import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
import * as firebase from 'firebase';

import {unregisterFromEvent} from "../../actions/eventActions";
import {saveUserPhone} from "../../actions/userPhoneReducer";

class Dashboard extends React.Component {
  render() {
    if (!this.props.user) {
      return <Redirect to={'/'}/>
    }
    let userRegisteredEvents = this.props.events.filter(
      event => _.some(Object.keys(event.participants), uid => uid === this.props.user.uid));
    return <div>
      {this.props.user && <img className={'uk-border-circle'} src={this.props.user.photoURL} alt={'User'}/>}
      <div>Welcome {this.props.user ? this.props.user.displayName : 'human'}.</div>
      <div>
        <ul>
          {userRegisteredEvents.map(event => <li key={event.id}>
            {event.name} <button onClick={() => this.props.unregisterFromEvent(event)}>Unregister</button></li>)}
        </ul>
      </div>
      <div>
        <input type={'phone'} value={this.props.userPhone} id={'phone-input'} placeholder={'Mobile'}/>
        <button onClick={() => {this.props.saveUserPhone(document.getElementById('phone-input').value)}}>Save</button>
      </div>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    events: state.event.events,
    userPhone: state.userPhone.phone
  }
};

export default connect(mapStateToProps, {
  unregisterFromEvent, saveUserPhone
})(Dashboard);
