import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class Dashboard extends React.Component {
  render() {
    let userRegisteredEvents = this.props.events.filter(
      event => _.some(Object.keys(event.participants), uid => uid === this.props.user.uid));
    return <div>
      {this.props.user && <img className={'uk-border-circle'} src={this.props.user.photoURL} alt={'User'}/>}
      <div>Welcome {this.props.user ? this.props.user.displayName : 'human'}.</div>
      <div>
        <ul>
          {userRegisteredEvents.map(event => <li key={event.id}>{event.name}</li>)}
        </ul>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    events: state.event.events
  }
};

export default connect(mapStateToProps)(Dashboard);
