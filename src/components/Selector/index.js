import React from 'react';

class Selector extends React.Component {
  render() {
    let componentClass = 'selector';
    if (this.props.activeID === this.props.id) {
      componentClass = 'selector active';
    }
    return (
      <div className={componentClass} onClick={() => this.props.onHandleClick()}></div>
    );
  }
}


export default Selector;
