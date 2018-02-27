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
    return <div className="dashboard">
      <div className="user-details">
        {this.props.user && <img className={'uk-border-circle user-img'} src={this.props.user.photoURL} alt={'User'}/>}
        <div className="user-name">{this.props.user ? this.props.user.displayName : 'human'}.</div>
      </div>
      <h3>Registered Events</h3>
      <table class="uk-table uk-table-middle uk-table-divider">
        <thead>
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th class="uk-width-small">Starts On</th>
              <th class="uk-width-small">Registered On</th>
              <th class="uk-width-small">Action</th>
            </tr>
        </thead>
        <tbody>
          {userRegisteredEvents.map(event =>
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>-</td>
                <td>-</td>
                <td><button className="uk-button uk-button-default" type="button" onClick={() => this.props.unregisterFromEvent(event)}>Unregister</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <p><b>Current mobile number: </b>{this.props.userPhone}</p>
        <input type={'phone'} id={'phone-input'} placeholder={'Mobile'}/>
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
