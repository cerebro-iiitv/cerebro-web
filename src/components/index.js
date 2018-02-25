import React from 'react';
import {connect} from 'react-redux';

import Countdown from './Countdown';
import Event from './Event';

class Home extends React.Component {
  render() {
    return <div>
      <Countdown/>
      <Event/>
    </div>
  }
}

export default connect()(Home);
