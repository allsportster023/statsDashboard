import React from 'react';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';

class DurationPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      currentRange: 'Last 30 Days'
    }
  }

    // getInitialState: function () {
	// 	return {
	// 		ranges: {
	// 			'Today': [moment(), moment()],
	// 			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
	// 			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
	// 			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
	// 			'This Month': [moment().startOf('month'), moment().endOf('month')],
	// 			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	// 		},
	// 		startDate: moment().subtract(29, 'days'),
	// 		endDate: moment(),
	// 		currentRange: 'Last 30 Days'
	// 	};
	// }

	handleEvent(event, picker) {
	  // console.log(picker);
		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate,
			currentRange: picker.chosenLabel
		});
	}

	render() {
		const start = this.state.startDate.format('YYYY-MM-DD');
		const end = this.state.endDate.format('YYYY-MM-DD');
		const label = this.state.currentRange;

		return (
      <DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onEvent={this.handleEvent}>
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
