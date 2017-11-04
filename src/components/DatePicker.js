import React from 'react';
import {DateField, DatePicker, TransitionView} from 'react-date-picker';


class DateTimePicker extends React.Component {

  constructor(props) {
    super(props);

    this.startTimeVal = 0;
    this.endTimeVal = 0;

  }

  render() {

    return (
      <div>
        <div>
          <div className="col-md-3 blueText">Start Time</div>
          <div className="calendar">
            <DateField
              dateFormat="YYYY-MM-DD HH:mm:ss"
              forceValidDate={true}
              defaultValue={this.props.startTime}
              onChange={(dateString, {dateMoment, timestamp}) => {
                console.log(this.startTimeVal);
                this.props.handler(this.startTimeVal, null);
              }}
            >
              <TransitionView>
                <DatePicker
                  navigation={true}
                  highlightWeekends={true}
                  highlightToday={true}
                  weekStartDay={0}
                  weekNumbers={false}
                  onChange={(dateString, {dateMoment, timestamp}) => {
                    this.startTimeVal = timestamp;
                  }}
                />
              </TransitionView>
            </DateField>
          </div>
        </div>
        <div>
          <div className="col-md-3 blueText">End Time</div>
          <div className="calendar">
            <DateField
              dateFormat="YYYY-MM-DD HH:mm:ss"
              forceValidDate={true}
              defaultValue={this.props.endTime}
              onChange={(dateString, {dateMoment, timestamp}) => {
                this.props.handler(null, this.endTimeVal);
              }}
            >
              <TransitionView>
                <DatePicker
                  navigation={true}
                  highlightWeekends={true}
                  highlightToday={true}
                  weekStartDay={0}
                  weekNumbers={false}
                  onChange={(dateString, {dateMoment, timestamp}) => {
                    this.endTimeVal = timestamp;
                  }}
                />
              </TransitionView>
            </DateField>
          </div>
        </div>
      </div>
    );
  }
}

export default DateTimePicker
