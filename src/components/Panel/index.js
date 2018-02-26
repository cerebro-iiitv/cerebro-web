import React from 'react';

class Panel extends React.Component {
  render() {
    return <aside className="panel">
        <h2 className="panel-header">{this.props.event.name}</h2>
        <p className="panel-info">{this.props.event.description}</p>
      </aside>
  }
}

export default Panel;
