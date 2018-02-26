import React from 'react';
import {connect} from 'react-redux';

import '../../css/Event.css';
import {loadEvents} from "../../actions/eventActions";
// import Selectors from '../Selectors';
// import Panel from '../Panel';

class Event extends React.Component {

  componentDidMount() {
    this.props.loadEvents();
  }

  changeActive(id) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${this.props.event.events[id].img}')`
      },
      panelStyle: {
        backgroundColor: this.props.event.events[id].colour
      }
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.event.events.map(event => <div key={event.id}>{event.header}</div>)}
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

export default connect(mapStateToProps, {
  loadEvents
})(Event);
