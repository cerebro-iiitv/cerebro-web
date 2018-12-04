import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
import * as firebase from 'firebase';
import './dashboard.css';

import {unregisterFromEvent} from "../../actions/eventActions";
import {saveUserPhone} from "../../actions/userPhoneReducer";

class Dashboard extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    this.mobileInput.addEventListener('keyup', event => {
      event.preventDefault();
      if (event.keyCode === 13) {
        this.mobileInput.value.toString().length === 10 ? this.props.saveUserPhone(this.mobileInput.value): alert('Please enter a valid number');
        this.mobileInput.value = '';
      }
    })
  }

  handleUnregister(event) {
    this.props.unregisterFromEvent(event);
    alert(`You have successfully unregistered from ${event.name}`);
  }

  render() {
    if (!this.props.user) {
      return <Redirect to={'/'}/>
    }
    let userRegisteredEvents = this.props.events.filter(
      event => _.some(Object.keys(event.participants), uid => uid === this.props.user.uid));

    return <div className="dashboard uk-container">
      <div uk-grid="true" className="uk-grid-large uk-child-width-expand@s uk-text-center">
        <div>
          <div className={'uk-flex'}>
            {this.props.user &&
            <img className={'uk-border-circle user-img'} src={this.props.user.photoURL} alt={'User'}/>}
            <div className={'uk-flex uk-flex-column uk-text-left uk-flex-center'}>
              <div className="user-name">{this.props.user ? this.props.user.displayName : 'human.'}</div>
              <div className={'user-name'}><b>Mobile: </b>{this.props.userPhone}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <button className="uk-button uk-button-secondary" onClick={() => firebase.auth().signOut()}>Sign out
            </button>
          </div>
        </div>

      </div>
      <h3>Registered Events</h3>
      <table className="uk-table uk-table-middle uk-table-divider">
        <thead>
        <tr>
          <th>#</th>
          <th>Event Name</th>
          <th className="uk-width-small">Starts On</th>
          <th className="uk-width-small">Action</th>
        </tr>
        </thead>
        <tbody>
        {userRegisteredEvents.map((event, index) =>
          <tr key={event.id}>
            <td>{index+1}</td>
            <td>{event.name}</td>
            <td>{event["start-time"]}</td>
            <td>
              <button className="uk-button uk-button-secondary primary-color primary-color-border uk-button-small"
                      onClick={() => this.handleUnregister(event)}>Unregister
              </button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
      <div className="update-mobile">
        <input ref={ref => this.mobileInput = ref} className="uk-input uk-form-width-medium" type="tel"
               id={'phone-input'} placeholder={'Mobile'}/>
        <button className="uk-button uk-button-secondary uk-margin-left" onClick={() => {
          this.mobileInput.value.toString().length === 10 ? this.props.saveUserPhone(this.mobileInput.value): alert('Please enter a valid number');
          this.mobileInput.value = ''
        }}>Save
        </button>
      </div>
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
