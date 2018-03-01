import React from 'react';
import {connect} from 'react-redux';

import Countdown from './Countdown';
import EventList from './eventList';

class Home extends React.Component {
  render() {
    return <div>
      <img className="absolute triangle" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/triangle.png?alt=media&token=f3cbbbed-2d31-4201-a051-8d123d594156" alt=""/>
      <img className="absolute square" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/square.png?alt=media&token=8979df90-1eaf-466e-9ef9-94546eec3e90" alt=""/>
      <Countdown/>
      <EventList/>
    </div>
  }
}

export default connect()(Home);
