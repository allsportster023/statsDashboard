import React from 'react';
//import SourceListPanel from './SourcePanel';
import TargetListPanel from './TargetPanel';
import RegionListPanel from './RegionPanel';
import ResourceListPanel from './ResourcePanel';
import ObjectiveListPanel from './ObjectivePanel';


const  Sidebar = React.createClass({

  getInitialState: function() {
    return {
      sources: [],
      time: [],
      categories: [],
      codes: []
    }
  },

  componentDidMount: function() {
//    var _this = this;
//    this.serverRequest =
//      axios
//        .get("http://localhost:9200/murmuration_target/_search")
//        .then(function(result) {
//          _this.setState({
//            targets: result.data.hits.hits
//          });
//        })
//    this.serverRequest =
//          axios
//            .get("http://localhost:9200/murmuration_region/_search")
//            .then(function(result) {
//              _this.setState({
//                regions: result.data.hits.hits
//              });
//            })
//    this.serverRequest =
//          axios
//            .get("http://localhost:9200/murmuration_resource/_search")
//            .then(function(result) {
//              _this.setState({
//                resources: result.data.hits.hits
//              });
//            })
//    this.serverRequest =
//          axios
//            .get("http://localhost:9200/murmuration_objective/_search")
//            .then(function(result) {
//              _this.setState({
//                objectives: result.data.hits.hits
//              });
//            })
  },

  componentWillUnmount: function() {
  },

  render: function() {

//Accordion panel of Target, Region, Resource, Objective

    return (
      <div className="container-fluid" style={{textAlign: "left"}}>
        <div id="accordion1" className="panel-group">
            <div className="panel panel-default" id="panel1">
                <div className="panel-heading-blue" id="heading1">
                    <h4 className="panel-title">
                        <a className="glyphicon glyphicon-asterisk pad14"href="#collapseOne"></a>
                        <a className="accordion-toggle" data-toggle="collapse" href="#collapseOne">Sources</a>

                    </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse">
                    <div className="panel-body">
                      <TargetListPanel/>
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
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Time</a>
                    </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <RegionListPanel/>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading-blue">
                    <h4 className="panel-title">
                        <a className="glyphicon glyphicon-th-large pad14" href="#collapseThree"></a>
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Categories</a>
                    </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ResourceListPanel/>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading-blue">
                    <h4 className="panel-title">
                        <a className="glyphicon glyphicon-barcode pad14" href="#collapseFour"></a>
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Codes</a>
                    </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ObjectiveListPanel/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )






//
//        <div className="blu_row">
//
//        <ul className="nav nav-tabs">
//            <li className="active">
//              <a href="#1" data-toggle="tab">Sources</a>
//            </li>
//            <li>
//              <a href="#2" data-toggle="tab">Time</a>
//            </li>
//            <li>
//              <a href="#3" data-toggle="tab">Events</a>
//            </li>
//            <li>
//              <a href="#4" data-toggle="tab">Codes</a>
//            </li>
//          </ul>
//
//          <div className="tab-content sidepanel clearfix">
//            <div className="tab-pane fade in active" id="1">
//              <TargetListPanel targets={this.state.targets} regions={this.state.regions} resources={this.state.resources} objectives={this.state.objectives} />
//            </div>
//            <div className="tab-pane fade" id="2">
//              <RegionListPanel targets={this.state.targets} regions={this.state.regions} resources={this.state.resources} objectives={this.state.objectives} />
//            </div>
//            <div className="tab-pane fade" id="3">
//              <ObjectiveListPanel targets={this.state.targets} regions={this.state.regions} resources={this.state.resources} objectives={this.state.objectives} />
//            </div>
//              <div className="tab-pane fade" id="4">
//              <ResourceListPanel targets={this.state.targets} regions={this.state.regions} resources={this.state.resources} objectives={this.state.objectives} />
//            </div>
//          </div>
//        </div>
//        </div>
//      </div>
    }
});

export default Sidebar








//
//      targets: [],
//      sources: [],
//      regions: [],
//      resources: [],
//      objectives: []
