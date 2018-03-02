import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import '../../css/EventDetail.css'

import {registerToEvent, unregisterFromEvent} from "../../actions/eventActions";

class Event extends React.Component {
  componentDidMount() {
     ReactDOM.findDOMNode(this).scrollIntoView();
  }
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
    return <div className="uk-container uk-margin-large-top">
      <div uk-grid="true" className="uk-grid-large uk-child-width-expand@s">
        <div className={'uk-width-1-2@s'}>
          <img src="/fest-logo.png" alt=""></img>
          <div className="uk-margin-large-top uk-flex uk-flex-center butt">
            <div>{this.props.user ? (
                isRegistered ? <button className="unregister"
                                       onClick={() => this.props.unregisterFromEvent(event)}>Unegister</button> :
                  <button className="register" onClick={() => this.props.registerToEvent(event)}>Register</button>) :
              'Please log in to register!'}
            </div>
            <button className="uk-margin-left go-back" onClick={() => this.props.history.push('/')}> BACK TO EVENTS
            </button>
          </div>
        </div>
        <div className={'uk-width-1-2@s'}>
          <div style={{color: 'white', fontWeight: '800', fontSize: '28px'}}>{event.name}</div>
          <div className={'primary-color uk-margin-top'}>PRIZE WORTH: <b>{event['prize-worth']}</b></div>
          <div className={'primary-color uk-margin-small-top'}>TEAM SIZE: <b>{event['team-size']}</b></div>
          <div className={'primary-color uk-margin-small-top'}>VENUE: <b>{event['venue']}</b></div>
          <div className={'primary-color uk-margin-small-top'}><b>{event['start-time']} - {event['end-time']}</b></div>
          <div className={'uk-margin-large-top'}>
            <span className="contacts">Contacts:</span>
            <div className={'uk-margin-top'}>
              {Object.keys(event.contact).map(role => <div className={'uk-flex uk-flex-between'} key={role}>
                <div>{event.contact[role].name} ({event.contact[role].role})</div>
                <div className={'primary-color'}>{event.contact[role].phone}</div>
              </div>)}
            </div>
          </div>
          <p className={'uk-margin-large-top faded'}>{event.description}</p>
          <div className="uk-margin-large-top rules">
            <div className="contacts">Rules</div>
            <ul className={'rule-ul'}>
              {event.rules.map((rule, idx) => <li className={'uk-margin-small-top faded rule-li'}
                                                  key={idx}>{rule}</li>)}
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
