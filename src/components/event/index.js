import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {registerToEvent, unregisterFromEvent} from "../../actions/eventActions";

class Event extends React.Component {
  render() {
    let eventId = this.props.match.params.id;
    if (this.props.event.events.length <= eventId) {
      return <div>Loading</div>
    }
    let event = this.props.event.events[eventId];
    let isRegistered = this.props.user && _.some(Object.keys(event.participants), i => i === this.props.user.uid);
    /**
     * event can now be used to render everything here. We can know if
     * the user has already registered to the event and display the
     * register button accordingly
     */
    return <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <div>
        <div><b>Start time</b>: {event['start-time']}</div>
        <div><b>End time</b>: {event['end-time']}</div>
      </div>
      <ul>
        {event.rules.map((rule, idx) => <li key={idx}>{rule}</li>)}
      </ul>
      <div>
        <h3>Contacts:</h3>
        <ul>
          {Object.keys(event.contact).map(role => <div key={role}>
            <b>{role}</b>: {event.contact[role].name} ({event.contact[role].phone})
          </div>)}
        </ul>
      </div>
      <div><b>Team size</b>: {event['team-size']}</div>
      <div><button
        onClick={() => isRegistered ? this.props.unregisterFromEvent(event) : this.props.registerToEvent(event)}>
        {isRegistered ? 'Unregister' : 'Register'}</button></div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    user: state.auth.user
  }
};

export default connect(mapStateToProps, {
  registerToEvent, unregisterFromEvent
})(Event);
