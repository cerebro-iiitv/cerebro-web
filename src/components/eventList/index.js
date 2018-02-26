import React from 'react';
import {connect} from 'react-redux';

import '../../css/Event.css';
import Panel from "../Panel";
// import Selectors from '../Selectors';

class EventList extends React.Component {

  render() {
    return (
      <div>
        {this.props.event.events.map((event, idx) => <Panel key={idx} event={event} />)}
        {/*<section className="wrapper events" style={this.state.wrapperStyle}>*/}
        {/*<Selectors events={this.props.event.events} activeID={this.state.activeID} handleChangeActive={this.changeActive}/>*/}
        {/*<Panel event={this.props.event.events[this.state.activeID]} panelStyle={this.state.panelStyle}/>*/}
        {/*</section>*/}
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
