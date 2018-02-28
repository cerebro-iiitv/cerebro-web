import React, {Component} from 'react';
import {FaFacebook, FaInstagram, FaGithub, FaPhone} from 'react-icons/lib/fa';

import './styles.css';

class Footer extends Component {
	render() {
		return(
			<div className="uk-flex uk-flex-center footer">
			    <div className="uk-card uk-card-body fest-logo">
			    	<img src="/fest-logo.png" alt=""/>
		    	</div>
			    
			    <div className="uk-card uk-card-body uk-margin-left">
				    <div className="links-section">
				    	<h4 className="section-title">Links</h4>
				    	<div className="footer-links">Home</div>
				    	<div className="footer-links">Dashboard</div>
				    	<div className="footer-links">Timeline</div>
				    	<div className="footer-links">Institute Site</div>
				    	<div className="footer-links">About</div>
					</div>
				</div>
			    
			    <div className="uk-card contact-section uk-card-body uk-margin-left">
			    	<h4 className="section-title">Contact</h4>
			    	<div className="icons">
			    		<FaFacebook />
			    		<FaInstagram />
			    		<FaGithub />
			    		<FaPhone />
			    	</div>
			    </div>
			</div>
		)
	}
}

export default Footer;
