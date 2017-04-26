import React from 'react';
import DurationPicker from './DurationPicker';
import DateTimePicker from './DatePicker';


class TimeframeSelectionPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="container-fluid" style={{textAlign: "left"}}>
          <div id="accordion5" className="panel-group">
            <div className="panel panel-default" id="panel5">
              <div className="panel-heading-darkgray" id="heading5">
                <h4 className="panel-title">
                  <a className="glyphicon glyphicon-calendar pad14" href="#collapseFive"></a>
                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion5" href="#collapseFive">Duration</a>
                </h4>
              </div>
              <div id="collapseFive" className="panel-collapse collapse">
                <div className="panel-body">
                  <DurationPicker handler={this.props.handler}/>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading-darkgray">
                <h4 className="panel-title">
                  <a className="glyphicon glyphicon-calendar pad14" href="#collapseSix"></a>
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion5" href="#collapseSix">Range</a>
                </h4>
              </div>
              <div id="collapseSix" className="panel-collapse collapse in">
                <div className="panel-body">
                  <DateTimePicker handler={this.props.handler} startTime={this.props.startTime} endTime={this.props.endTime}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimeframeSelectionPanel
