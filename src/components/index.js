import React from 'react';
import {connect} from 'react-redux';

import Countdown from './Countdown';
import EventList from './eventList';

class Home extends React.Component {
  render() {
    return <div>
      <Countdown/>
      <EventList/>
    </div>
  }
}

export default connect()(Home);
