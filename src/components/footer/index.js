import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

import './styles.css';

class Footer extends Component {
	render() {
		return (
			<div className={'uk-margin-xlarge-top'}>
				<div
					className={'uk-container'}
					style={{
						height: '1px',
						backgroundColor: 'white'
					}}
				/>
				<div className="festnew-logo fest-mob">
					<img src="./fest-logo.png" alt="IIIT Vadodara" className="img-fluid festpic" />
					<img
						src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/website.png?alt=media&amp;token=5a13225c-3b8d-49a4-a8ac-7e6de9451857"
						alt="IIIT Vadodara"
						className="foot-int"
					/>
				</div>
				<div className="uk-flex uk-flex-center footer">
					<div className="uk-card uk-card-body fest-logo">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/website.png?alt=media&token=5a13225c-3b8d-49a4-a8ac-7e6de9451857"
							className="foot-int-logo"
							alt=""
						/>
						<img src="./fest-logo.png" alt="" className="foot-fest-logo" />
					</div>

					<div className="uk-card uk-card-body uk-margin-left">
						<div className="links-section">
							<h4 className="section-title">Links</h4>
							<Link to="/">
								<div className="footer-links">Home</div>
							</Link>
							{this.props.user && (
								<Link to="/dashboard">
									<div className="footer-links">Dashboard</div>
								</Link>
							)}
							<Link to="/timeline">
								<div className="footer-links">Timeline</div>
							</Link>
							<a href="http://iiitvadodara.ac.in/" target={'_blank'}>
								<div className="footer-links">Institute Site</div>
							</a>
							<Link to="/about">
								<div className="footer-links">About</div>
							</Link>
						</div>
					</div>

					<div className="uk-card contact-section uk-card-body uk-margin-left">
						<h4 className="section-title">Contact</h4>
						<div className="icons">
							<a href="https://www.facebook.com/cerebro.iiitv" target={'_blank'}>
								<div className="single-icon">
									<FaFacebook />
								</div>
							</a>
							<a href="https://www.instagram.com/cerebro.iiitv/" target={'_blank'}>
								<div className="single-icon">
									<FaInstagram />
								</div>
							</a>
							<a href="https://twitter.com/Cerebro_iiitv" target={'_blank'}>
								<div className="single-icon">
									<FaTwitter />
								</div>
							</a>
							<a href="http://github.com/cerebro-iiitv" target={'_blank'}>
								<div className="single-icon">
									<FaGithub />
								</div>
							</a>
						</div>
						<div>
							<span className="primary-color">Email: </span>
							<a href="mailto:cerebro@iiitv.ac.in" className="white-link">
								cerebro@iiitv.ac.in
							</a>
						</div>
						<div>
							<span className="primary-color">Phone: </span>
							<a href="tel:+919370645038" className="white-link">
								+91-9370645038
							</a>
						</div>
						<div>
							<span className="primary-color">WhatsApp: </span>
							<a href="https://wa.me/917737253979" className="white-link">
								+91-7737253979
							</a>
						</div>
						<div>
							<span className="primary-color">Address: </span>
							<a href="https://goo.gl/maps/7g5D6XJpMAD2" className="white-link">
								c/o Block No.9, Government Engineering College, Sector-28, Gandhinagar, Gujarat-382028
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user
	};
};

export default connect(mapStateToProps)(Footer);
