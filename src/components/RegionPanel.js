import React from 'react';
import { DateField, DatePicker, TransitionView } from 'react-date-picker';
import DurationPicker from './DurationPicker';



class RegionListPanel extends React.Component {



  render() {




    return (
      <div>
        Search
        <div className="container-fluid" style={{textAlign: "left"}}>
            <div id="accordion5" className="panel-group">
                <div className="panel panel-default" id="panel5">
                    <div className="panel-heading-darkgray" id="heading5">
                        <h4 className="panel-title">
                            <a className="glyphicon glyphicon-calendar pad14"href="#collapseFive"></a>
                            <a className="accordion-toggle" data-toggle="collapse" href="#collapseFive">Duration</a>
                        </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse">
                        <div className="panel-body">
                          <DurationPicker/>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading-darkgray">
                        <h4 className="panel-title">
                            <a className="glyphicon glyphicon-calendar pad14" href="#collapseSix"></a>
                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">Range</a>
                        </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse in">
                        <div className="panel-body">
                          <div>
                            <div className="col-md-3 blueText">Start Time</div>
                            <div className="calendar">
                              <DateField
                                dateFormat="YYYY-MM-DD HH:mm:ss"
                                forceValidDate={true}
                                defaultValue={1486514302095}
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
                              defaultValue={1486514302095}
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
                    </div>
                </div>
            </div>
        </div>

      </div>
    )}
}

export default RegionListPanel




//  const {reportSettings: {
//          dateTo
//      }} = this.props;
//  return (
//      <div id="date-picker">
//          <Label for="date-picker-1">Select Results date</Label>
//          <DatePicker todayButton={"Today"} dateFormat={Constants.DATE_FORMAT} customInput={(<ExampleCustomInput/>)} selected={dateTo} onChange={this.handleChange}/>
//      </div>
//  );
