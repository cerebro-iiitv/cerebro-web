import React from 'react';
import {connect} from 'react-redux';

import SignIn from '../signIn';
import Navbar from '../Navbar'

class Header extends React.Component {

  render() {
    return(
		<div>
			<Navbar />
			{this.props.signedIN ? 'You have logged in' : 'Please sign in'}
			{!this.props.signedIN && <SignIn/>}
		</div>
	) 
  }
}

const mapStateToProps = state => {
  return {
    signedIN: state.auth.signedIn
  }
};

export default connect(mapStateToProps)(Header);
