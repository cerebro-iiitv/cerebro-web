import React from 'react';
import {Link} from 'react-router-dom';

class Panel extends React.Component {
  render() {
    return <div className="uk-text-center panel">
        <Link to={'/events/' + this.props.event.id}>
          <h2 className="panel-header">{this.props.event.name}</h2>
        </Link>
        <p className="panel-info">{this.props.event.description}</p>
      </div>
  }
}

export default Panel;
