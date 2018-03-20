import React from 'react';
import styled from 'styled-components';

import config from '../../../app.config';

const count = 5;
const url = `https://www.googleapis.com/calendar/v3/calendars/${config.calendarId}/events?key=${config.calendarApi}&maxResults=${count}&timeMin=${(new Date()).toISOString()}`;

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
    }

    componentDidMount = () => fetch(url).then(res => res.json())
        .then(json => this.setState({
            events: json.items.sort((a, b) =>
                new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime())
        }));

    render = () => <ul>
        {this.state.events.map(event => <li key={event.id}>
            <CalendarEvent event={event} />
        </li>)}
    </ul>;
};

const EventDate = styled.div`
    margin-right: 4.5%;
    float: left;
    font-weight: bold;
    margin: 10px 5% 10px 0;
    padding: 3px;
    width: 15%;
    text-align: center;
    background: #666;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
`;

const WeekDay = styled.span`
    background: #fff;
    color: #666;
    display: block;
    font-size: 11px;
    letter-spacing: .5px;
    padding: 3px;
    text-transform: uppercase;
`;

const DateNumber = styled.span`
    color: white;
    display: block;
    font-size: 15px;
    line-height: 1.6;
    width: 100%;
`;

const EventInfo = styled.div`
    font-size: 13px;
    line-height: 1.6;
    float: left;
    margin: 10px 0;
    width: 80%;
`;

const EventTitle = styled.h2`
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
`;

const EventItem = styled.div`
    overflow: hidden;
    width: 100%;
`;

const CalendarEvent = ({ event }) => {
    const { summary, description, htmlLink, start } = event;
    const locale = 'en-au';

    const startDate = new Date(start.dateTime);
    const month = startDate.toLocaleDateString(locale, { month: 'short' });
    const weekday = startDate.toLocaleString(locale, { weekday: 'short' });
    const date = startDate.toLocaleString(locale, { day: 'numeric' });
    const time = startDate.toLocaleTimeString(locale);

    return <EventItem>
        <EventDate>
            <WeekDay>
                {weekday}
            </WeekDay>
            <DateNumber>
                {date}
            </DateNumber>
        </EventDate>
        <EventInfo>
            <EventTitle>
                <a href={htmlLink} rel='bookmark' target='_blank'>{summary}</a>
            </EventTitle>
            <div>
                {description}
                <span>{month} {date} @ {time}</span>
            </div>
        </EventInfo>
    </EventItem>;
}

export default Calendar;