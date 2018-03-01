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
        <VerticalTimeline >
          {events.map(event =>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={event["start-time"]}
              iconStyle={{background: '#FF6E2C', border: 0}}
              key={event.id}
              onClick={() => this.props.history.push('/events/' + event.id)}
            >
              <div className="vertical-timeline-element-title">{event.name}</div>
              <div className="vertical-timeline-element-subtitle faded">Team of {event["team-size"]}</div>
              <p>
                {event.description}
              </p>
            </VerticalTimelineElement>
          )}
        </VerticalTimeline>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
};

export default connect(mapStateToProps)(Timeline);
