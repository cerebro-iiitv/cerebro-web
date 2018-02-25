import React, { Component } from 'react';

import team from '../../data/team';
import '../../css/team.css'

class Team extends Component {
	render() {
		return(
			<div className="team container">
				{team.map( person => (
					<div className="blog-card spring-fever">
						<div className="title-content">
							<h3>{ person.name }</h3>
							<h4>Contact: { person.contact }</h4>
							<hr className="divider" />
							<div className="intro">{ person.desc }</div>
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default Team;
