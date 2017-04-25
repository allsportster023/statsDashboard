import React from 'react';
import {DateField, DatePicker, TransitionView} from 'react-date-picker';


class DateTimePicker extends React.Component {

  constructor(props) {
    super(props);
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
            >
              <TransitionView>
                <DatePicker
                  navigation={true}
                  highlightWeekends={true}
                  highlightToday={true}
                  weekStartDay={0}
                  weekNumbers={false}
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
            >
              <TransitionView>
                <DatePicker
                  navigation={true}
                  highlightWeekends={true}
                  highlightToday={true}
                  weekStartDay={0}
                  weekNumbers={false}
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
