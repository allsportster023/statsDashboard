import React from 'react';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';

class DurationPicker extends React.Component {

  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);
    this.handler = this.props.handler;

    this.state = {
      ranges: {
        'Today': [moment().utc(true), moment().utc(true)],
        'Yesterday': [moment().utc(true).subtract(1, 'days'), moment().utc(true).subtract(1, 'days')],
        'Last 7 Days': [moment().utc(true).subtract(6, 'days'), moment().utc(true)],
        'Last 30 Days': [moment().utc(true).subtract(29, 'days'), moment().utc(true)],
        'This Month': [moment().utc(true).startOf('month'), moment().utc(true).endOf('month')],
        'Last Month': [moment().utc(true).subtract(1, 'month').startOf('month'), moment().utc(true).subtract(1, 'month').endOf('month')],
        'This Year': [moment().utc(true).startOf('year'), moment().utc(true).endOf('year')],
        'Last Year': [moment().utc(true).subtract(1, 'year').startOf('year'), moment().utc(true).subtract(1, 'year').endOf('year')]
      },
      startDate: moment().utc(true).subtract(29, 'days'),
      endDate: moment().utc(true),
      currentRange: 'Last 30 Days'
    }
  }

	handleEvent(event, picker) {

    this.props.handler(picker.startDate, picker.endDate);

		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate,
			currentRange: picker.chosenLabel
		});
	}

	render() {

		const label = this.state.currentRange;

		return (
      <DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onApply={this.handleEvent}>
        <button className="btn selected-date-range-btn duration-btn" style={{width:'100%', align: 'center'}}>
          <div className="pull-left">
            <div className="glyphicon glyphicon-calendar"></div>
          </div>
          <div className="pull-right">
            <span>
              {label}
            </span>
            <span className="caret"></span>
          </div>
        </button>
      </DateRangePicker>

		);
	}
}

export default DurationPicker
