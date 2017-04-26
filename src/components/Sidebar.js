import React from 'react';
import SourceSelectionPanel from './SourceSelectionPanel';
import TimeframeSelectionPanel from './TimeframeSelectionPanel';
import CategorySelectionPanel from './CategorySelectionPanel';
import CodeSelectionPanel from './CodeSelectionPanel';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleTimeframeChange = this.handleTimeframeChange.bind(this);

    this.state = {
      sourceArray: [],
      startEndTimes: [Date.now()-(86400000*7), Date.now()],
      categoryArray: [],
      codeArray: []
    };
  }

  handleSourceChange(e) {

    console.log("Handling SOURCE change");
    console.log(e);

    this.setState({
      sourceArray: e
    });
  }

  handleCategoryChange(e) {

    console.log("Handling CATEGORY change");
    console.log(e);
    this.setState({
      categoryArray: e
    });

  }

  handleCodeChange(e) {

    console.log("Handling CODE change");
    console.log(e);
    this.setState({
      codeArray: e
    });

  }

  handleTimeframeChange(start, end) {

    console.log("Handling TIME change");

    const timeArr = this.state.startEndTimes;

    //If the start time is to be chagned
    if(start) {
      timeArr[0] = start;
    }

    //If the end time is to be changed
    if(end){
      timeArr[1] = end;
    }

    console.log(timeArr);

    //Make sure that the end time is after the start time
    if(timeArr[0] < timeArr[1]) {

      this.setState({
        startEndTimes: timeArr
      });

    } else {
      //Alert the user that they have to select an
      //end that is later than the start time
      console.log("End is before start");
      alert("End Time must be after Before Time");

    }
  }

  componentWillReceiveProps(nextProps) {

    console.log("New Props in Sidebar");

    if (this.props != nextProps) {
      console.log("Props did actually change");
      this.props = nextProps;
    }
  }

  componentWillUpdate(nextProps, nextState){

    if(this.state != nextState){
      console.log("New State Detected");

      //TODO determine URL for SOLR call
    }

  }

  componentDidMount() {
    console.log("ComponentDidMount")
  }
  componentWillMount() {
    console.log("ComponentWillMount")
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount")
  }5

  render() {


    //Accordion panel of Target, Region, Resource, Objective
    return (
      <div className="container-fluid" style={{textAlign: "left"}}>
        <div id="accordion1" className="panel-group">
          <div className="panel panel-default" id="panel1">
            <div className="panel-heading-blue" id="heading1">
              <h4 className="panel-title">
                <a className="glyphicon glyphicon-asterisk pad14" href="#collapseOne"></a>
                <a className="accordion-toggle collapsed" data-toggle="collapse" href="#collapseOne">Sources</a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse">
              <div className="panel-body">
                <SourceSelectionPanel handler={this.handleSourceChange} selectedSources={this.state.sourceArray}/>
                <div className="hero-circle">
                  <div className="hero-face"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading-blue">
              <h4 className="panel-title">
                <a className="glyphicon glyphicon-time pad14" href="#collapseTwo"></a>
                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion"
                   href="#collapseTwo">Time</a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse in">
              <div className="panel-body">
                <TimeframeSelectionPanel handler={this.handleTimeframeChange} startTime={this.state.startEndTimes[0]} endTime={this.state.startEndTimes[1]}/>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading-blue">
              <h4 className="panel-title">
                <a className="glyphicon glyphicon-th-large pad14" href="#collapseThree"></a>
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Categories</a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse">
              <div className="panel-body">
                <CategorySelectionPanel handler={this.handleCategoryChange} categories={this.state.categoryArray}/>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading-blue">
              <h4 className="panel-title">
                <a className="glyphicon glyphicon-barcode pad14" href="#collapseFour"></a>
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Codes</a>
              </h4>
            </div>
            <div id="collapseFour" className="panel-collapse collapse">
              <div className="panel-body">
                <CodeSelectionPanel handler={this.handleCodeChange} codes={this.state.codeArray}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Sidebar
