import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import './styles.css';
import {registerToEvent, unregisterFromEvent} from "../../actions/eventActions";

class Panel extends React.Component {
  navigateToEvent() {
    this.props.history.push('/events/' + this.props.event.id);
  }

  handleRegister() {
    let isRegistered = _.some(Object.keys(this.props.event.participants), uid => uid === this.props.user.uid);

    if (isRegistered) {
      this.props.unregisterFromEvent(this.props.event);
      alert(`You have successfully unregistered from ${this.props.event.name}`);
    } else {
      this.props.registerToEvent(this.props.event);
      alert(`You have successfully registered for ${this.props.event.name}`);
    }
  }

  render() {
    let date = new Date(this.props.event['start-time']);

    let dateString;
    if (!isNaN(date.getTime())) {
      dateString = 'MAR ' + date.getDate() + ', ' + (date.getHours() <= 12 ? date.getHours() : date.getHours() % 12) + ':' + (date.getMinutes() < 10 ? '0'
        + date.getMinutes() : date.getMinutes()) + ' ' + (date.getHours() >= 12 ? 'PM' : 'AM');
    }

    let isRegistered = this.props.user && _.some(Object.keys(this.props.event.participants), uid => uid === this.props.user.uid);

    return <div className={'uk-width-1-2@s uk-width-1-3@m uk-width-1-3@l'}>
      <div className="uk-card uk-card-body event-panel">
        <div className={'panel-img-container'}>
          <img src={this.props.event.img || './fest-logo.png'} className={'uk-margin-bottom panel-img'} alt=""/>
        </div>
        <h3 className="uk-card-title white">{this.props.event.name}</h3>
        <p className={'uk-text-left panel-team-size primary-color'}>TEAM SIZE: <b>{this.props.event['team-size']}</b>
        </p>
        <p className={'uk-text-left panel-team-size primary-color'}>{dateString}</p>
        <p className={'uk-text-left panel-content'}>{this.props.event.description}</p>
        <p className={'panel-buttons'}>
          {this.props.user && (isRegistered ?
            <span className={'panel-unregister'} onClick={this.handleRegister.bind(this)}>Unregister</span> :
            <span className={'panel-register'} onClick={this.handleRegister.bind(this)}>Register</span>)
          }
          <span className={'panel-more'} onClick={this.navigateToEvent.bind(this)}>View Details</span>
        </p>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
};

export default withRouter(connect(mapStateToProps, {
  unregisterFromEvent, registerToEvent
})(Panel));
