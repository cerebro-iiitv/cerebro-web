import React from 'react';
import {connect} from 'react-redux';

class Timeline extends React.Component {
  render() {
    let events = this.props.event.events.slice();
    events.sort((a, b) => (Date.parse(a['start-time']) - Date.parse(b['start-time'])));
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
