import React from 'react';
import {connect} from 'react-redux';

import Panel from "../Panel";
import './styles.css';

class EventList extends React.Component {

  render() {
    return (
      <div className={'uk-container event-list'}>
        <div className={'uk-text-center uk-margin-large-bottom'}>
          <span className={'event-list-heading'}>PAST</span>
          {' '}
          <span className={'event-list-heading'}>EVENTS</span>
        </div>
        <div uk-grid="true" className={'uk-grid-large uk-child-width-expand@s'}>
          {this.props.event.events.map((event, idx) => <Panel key={idx} event={event}/>)}
        </div>
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
