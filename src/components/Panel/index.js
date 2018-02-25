import React from 'react';

class Panel extends React.Component {

  render(){
    return(
      <aside className="panel" style={this.props.panelStyle}>
        <h2 className="panel-header">{this.props.event.header}</h2>
        <p className="panel-info">{this.props.event.body}</p>
      </aside>
    );
  }
}

export default Panel;
