import React from 'react';
import SourceSelectionPanel from './SourceSelectionPanel';
import TimeframeSelectionPanel from './TimeframeSelectionPanel';
import CategorySelectionPanel from './CategorySelectionPanel';
import CodeSelectionPanel from './CodeSelectionPanel';


class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    //Accordion panel of Sources, Timeframes, Categories, and Codes
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
                <SourceSelectionPanel handler={this.props.sourceHandler} selectedSources={this.props.selectedSources}/>
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
                <TimeframeSelectionPanel handler={this.props.timeHandler} startTime={this.props.startEndTimes[0]}
                                         endTime={this.props.startEndTimes[1]}/>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading-blue">
              <h4 className="panel-title">
                <a className="glyphicon glyphicon-th-large pad14" href="#collapseThree"></a>
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                   href="#collapseThree">Categories</a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse">
              <div className="panel-body">
                <CategorySelectionPanel handler={this.props.categoryHandler} categories={this.props.categoryArray}/>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading-blue">
              <h4 className="panel-title">
                <a className="glyphicon glyphicon-barcode pad14" href="#collapseFour"></a>
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                   href="#collapseFour">Codes</a>
              </h4>
            </div>
            <div id="collapseFour" className="panel-collapse collapse">
              <div className="panel-body">
                <CodeSelectionPanel handler={this.props.codeHandler} codes={this.props.codeArray}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Sidebar
