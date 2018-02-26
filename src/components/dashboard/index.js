import React from 'react';
import {connect} from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return <div>
      {this.props.user && <img className={'uk-border-circle'} src={this.props.user.photoURL} alt={'User'}/>}
      <div>Welcome {this.props.user ? this.props.user.displayName : 'human'}.</div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(Dashboard);
