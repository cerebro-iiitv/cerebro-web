import React, { Component } from 'react';

import team from '../../data/team';

class Team extends Component {
	render() {
		return(
			<div className="team">
				{team.map( person => (
					<div class="uk-card uk-card-default team-card">
						<div class="uk-card-media-top">
							<img src={person.img} alt="person.name" />
						</div>
						<div class="uk-card-body">
							<h3 class="uk-card-title">{person.name}</h3>
							<p>{person.desc}</p>
							<h5>Contact: {person.contact}</h5>
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default Team;
