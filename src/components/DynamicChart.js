import React from 'react';
import AxisYInput from './AxisYInput';
import AxisXInput from './AxisXInput';
import ChartTypeInput from './ChartTypeInput';
import D3Chart from './D3Chart';

class DynamicChart extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      objectives: []
    }
  }

  componentWillReceiveProps(nextProps) {

    if(this.props != nextProps) {
      this.setState({objectives: nextProps.objectives})
    }
  }

  handleClick(selection) {
    this.props.onClick(selection);
  }

  handleSearch(vals){
    console.log("Handling Objectives Search");
    console.log(vals);

  }

  render() {

    return (
      <div className="container-fluid" style={{width: '100%', height: '200px', border: '4px', color: 'black', textAlign: 'center'}}>
          <div className="row">
              <div className="col-md-3">
                  <AxisYInput />
              </div>
              <div className="col-md-6">
                  TITLE AREA
              </div>
              <div className="col-md-3">
                  <ChartTypeInput />
              </div>
          </div>
          <div className="row">
              <div className="col-md-10 col-md-offset-1">
                  <D3Chart width="500" height="200"/>
              </div>
          </div>
          <div className="row">
              <div className="col-md-3">
                  <AxisXInput />
              </div>
              <div className="col-md-6">
                  AXIS TITLE
              </div>
          </div>
      </div>
  )}
}

export default DynamicChart
