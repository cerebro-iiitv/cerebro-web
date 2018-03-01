import React, {Component} from 'react';
import {FaFacebook, FaInstagram, FaGithub, FaPhone} from 'react-icons/lib/fa';

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
				    	<a href="/home"><div className="footer-links">Home</div></a>
				    	<a href="/dashboard"><div className="footer-links">Dashboard</div></a>
				    	<a href="/timeline"><div className="footer-links">Timeline</div></a>
				    	<a href="http://iiitvadodara.ac.in/"><div className="footer-links">Institute Site</div></a>
				    	<a href="/about"><div className="footer-links">About</div></a>
					</div>
				</div>

			    <div className="uk-card contact-section uk-card-body uk-margin-left">
			    	<h4 className="section-title">Contact</h4>
			    	<div className="icons">
			    		<a href=""><div class="single-icon"> <FaFacebook /></div></a>
			    		<a href=""><div class="single-icon"><FaInstagram /></div></a>
			    		<a href=""><div class="single-icon"><FaGithub /></div></a>
			    	</div>
			    	<div>Email: cerebro.iiitv@gmail.com</div>
			    	<div>Address: c/o Block No.9, Government Engineering College, Sector-28, Gandhinagar, Gujarat - 382028</div>
			    </div>
			</div>
      </div>
		)
	}
}

export default Footer;
