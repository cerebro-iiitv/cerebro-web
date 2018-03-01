import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaGithub} from 'react-icons/lib/fa';

import './styles.css';

class Footer extends Component {
	render() {
		return(
		  <div className={'uk-margin-xlarge-top'}>
        <div className={'uk-container'} style={{
          height: '1px',
          backgroundColor: 'white',
        }}/>
			<div className="uk-flex uk-flex-center footer">
			    <div className="uk-card uk-card-body fest-logo">
			    	<img src="/fest-logo.png" alt=""/>
		    	</div>

			    <div className="uk-card uk-card-body uk-margin-left">
				    <div className="links-section">
				    	<h4 className="section-title">Links</h4>
				    	<Link to="/"><div className="footer-links">Home</div></Link>
              {this.props.user && <Link to="/dashboard"><div className="footer-links">Dashboard</div></Link>}
				    	<Link to="/timeline"><div className="footer-links">Timeline</div></Link>
				    	<a href="http://iiitvadodara.ac.in/" target={'_blank'}><div className="footer-links">Institute Site</div></a>
				    	<Link to="/about"><div className="footer-links">About</div></Link>
					</div>
				</div>

			    <div className="uk-card contact-section uk-card-body uk-margin-left">
			    	<h4 className="section-title">Contact</h4>
			    	<div className="icons">
			    		<a href=""><div className="single-icon"><FaFacebook /></div></a>
			    		<a href=""><div className="single-icon"><FaInstagram /></div></a>
			    		<a href="http://github.com/cerebro-iiitv"><div className="single-icon"><FaGithub /></div></a>
			    	</div>
			    	<div>Email: cerebro.iiitv@gmail.com</div>
			    	<div>Address: c/o Block No.9, Government Engineering College, Sector-28, Gandhinagar, Gujarat - 382028</div>
			    </div>
			</div>
      </div>
		)
	}
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
};

export default connect(mapStateToProps)(Footer);
