import React from 'react';

import '../../css/Event.css';
import events from '../../data/events';
import Selectors from '../Selectors';
import Panel from '../Panel';
class Event extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      activeID : 0,
      wrapperStyle:{
        backgroundImage: `url('${events[0].img}')`
      },

      panelStyle : {background : events[0].colour}
    }

    this.changeActive = this.changeActive.bind(this);
  }

  changeActive(id) {
    this.setState({
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${events[id].img}')`
      },
      panelStyle: {
        backgroundColor: events[id].colour
      }
    })
  }

  render() {
    return (
      <section className="wrapper events" style={this.state.wrapperStyle}>
        <Selectors events={events} activeID={this.state.activeID} handleChangeActive={this.changeActive}/>
        <Panel event={events[this.state.activeID]} panelStyle={this.state.panelStyle}/>
      </section>
    );
  }
}


export default Event;
