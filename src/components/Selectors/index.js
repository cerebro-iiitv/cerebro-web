import React from 'react';

import events from '../../data/events';
import Selector from '../Selector';

class Selectors extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (id !== this.props.activeID) {  //PROBLEM
      this.props.handleChangeActive(id);
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="selectors">
        {events.map((item) =>
          <Selector
            key={item.id}
            id={item.id}
            onHandleClick={() => this.handleClick(item.id)}
            onChangeActive={this.props.handleChangeActive}
            activeID={this.props.activeID}
          />
        )}
      </div>
    );
  }
}

export default Selectors;
