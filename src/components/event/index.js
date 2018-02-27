import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import '../../css/EventDetail.css'

import {registerToEvent, unregisterFromEvent} from "../../actions/eventActions";

class Event extends React.Component {
  render() {
    let eventId = this.props.match.params.id;
    if (this.props.event.events.length <= eventId) {
      return <div>Loading</div>
    }
    let event = this.props.event.events[eventId];
    let isRegistered = event.participants && this.props.user && _.some(Object.keys(event.participants), i => i === this.props.user.uid);
    /**
     * event can now be used to render everything here. We can know if
     * the user has already registered to the event and display the
     * register button accordingly
     */
    return <div className= "container">
    <div className = "wrapper">
    <div className = "event-info">
      <img src="300.png"></img>
      <div>
        <h3 className= "contacts">Contacts:</h3>
        <ul>
          {Object.keys(event.contact).map(role => <div key={role}>
            <b>{role}</b>: {event.contact[role].name} ({event.contact[role].phone})
          </div>)}
        </ul>
      </div>
      <div><b>Team size</b>: {event['team-size']}</div>
      </div>

        <div className = "event-description">
          <h2>{event.name}</h2>
          <div className = "butt">
            <div>{this.props.user ? <button className= "register"
              onClick={() => isRegistered ? this.props.unregisterFromEvent(event) : this.props.registerToEvent(event)}>
              {isRegistered ? 'Unregister' : 'Register'}</button> : 'Please log in to register!'}</div>
              <div className = "space"></div>
              <div>{this.props.user ? <button className = "go-back"
              onClick={() => isRegistered ? this.props.unregisterFromEvent(event) : this.props.registerToEvent(event)}>
              {isRegistered ? 'Unregister' : 'Register'}</button> : 'Please log in to register!'}</div>
          </div>
          <p>{event.description}</p>
          <div>
            <div><b>Start time</b>: {event['start-time']}</div>
            <div><b>End time</b>: {event['end-time']}</div>
          </div>
          <div className = "rules"><b><h3 className= "header-rules">Rules</h3></b>
            <ul>
              {event.rules.map((rule, idx) => <li key={idx}>{rule}</li>)}
            </ul>
          </div>

        </div>
      </div>
      </div>
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    user: state.auth.user,
  }
};

export default connect(mapStateToProps, {
  registerToEvent, unregisterFromEvent
})(Event);
