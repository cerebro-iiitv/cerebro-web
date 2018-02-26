import React from 'react';
import {connect} from 'react-redux';

class Timeline extends React.Component {
  render() {
    let events = this.props.event.events;
    events.sort((a, b) => {
      if (Date.parse(a['start-time']) < Date.parse(b['start-time'])) {
        return -1;
      } else {
        return 0;
      }
    });
    return <div>
      {events.map(event => <li key={event.id}>{event.name}</li>)}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
};

export default connect(mapStateToProps)(Timeline);
