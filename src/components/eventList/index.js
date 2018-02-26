import React from 'react';
import {connect} from 'react-redux';

import '../../css/Event.css';
import Panel from "../Panel";

class EventList extends React.Component {

  // TODO: Show loading indicator if event list is empty
  // TODO: Replace Panel with event card
  render() {
    return (
      <div>
        {this.props.event.events.map((event, idx) => <Panel key={idx} event={event} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
};

export default connect(mapStateToProps)(EventList);
