import React from 'react';
import {connect} from 'react-redux';
import {FaGithub} from 'react-icons/lib/fa';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends React.Component {
  render() {
    let events = this.props.event.events.slice();
    events.sort((a, b) => (Date.parse(a['start-time']) - Date.parse(b['start-time'])));
    return <div>
      {events.map(event => 
        <VerticalTimeline key={event.id}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={event["start-time"]}
            iconStyle={{ background: '#FF6E2C', color: '#fff' }}
            icon={<FaGithub />}
          >
            <h3 className="vertical-timeline-element-title">{event.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">Participate in a team of {event["team-size"]} people(s)</h4>
            <p>
              {event.description}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      )}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
};

export default connect(mapStateToProps)(Timeline);
