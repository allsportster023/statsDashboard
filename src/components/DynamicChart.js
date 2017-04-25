import React from 'react';
// var d3 = require('d3');
import AxisYInput from './AxisYInput';
import AxisXInput from './AxisXInput';
import ChartTypeInput from './ChartTypeInput';
import DynamicBarChart from './DynamicBarChart';
import DynamicPieChart from './DynamicPieChart';
// import d3 from 'd3';

const dataFile = require('../data/dateSource.json');
const dataFileSource = require('../data/source.json');
// const dataFileAge = require('../data/age.json');

const pieChartSeries = [];


// const xScale = 'ordinal';
const yTickFormat = d3.format(".2s");

const value = function (d) {
  return d.count;
};


//FOR TIME
// const xScale = 'time';
// Date parsing
// const x = function (d) {
//   var parseDate = d3.time.format("%Y-%m-%d").parse;
//   return parseDate(d.Date);
// };
// Y Parsing
// const y = function(d) {
//   return +d;
// };

let xValFunction = function (d) {
  return d.date;
};


class DynamicChart extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleXaxisChange = this.handleXaxisChange.bind(this);
    this.handleYaxisChange = this.handleYaxisChange.bind(this);
    this.handleChartTypeChange = this.handleChartTypeChange.bind(this);

    this.state = {
      data: [],
      chartSeries: [],
      xAxisValue: 'date',
      xScale: 'ordinal',
      xValue: xValFunction,
      yAxisValue: 'source',
      chartType: 'bar'

    }
  }

  componentDidMount() {
    // this.loadExternalData();
    dataFile.forEach(function (d) {
      pieChartSeries.push({"field": d.State})
    });

    var re = new RegExp(this.state.xAxisValue, 'i');

    let tmpChartSeries = []
    for (var key in dataFile[0]) {
      if (!key.match(re)) {
        tmpChartSeries.push({"field": key})
      }
    }

    this.setState({
      data: dataFile,
      chartSeries: tmpChartSeries,
      xAxisValue: this.state.xAxisValue,
      xValue: xValFunction
    });
  }

  loadExternalData() {
    $.ajax({
      url: "http://",
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentWillReceiveProps(nextProps) {

    if (this.props != nextProps) {
      this.setState({data: nextProps.data})
    }
  }

  handleDropdownChange(event, data) {

  }

  handleClick(selection) {
    this.props.onClick(selection);
  }

  handleXaxisChange(e) {
    console.log("Changing X Axis value to: " + e.target.value);
    e.preventDefault();

    const re = new RegExp(e.target.value, 'i');

    let useData = dataFileSource;

    if (e.target.value == 'date')
      useData = dataFile;
    else if (e.target.value == 'source')
      useData = dataFileSource;


    let tmpChartSeries = [];
    for (const key in useData[0]) {
      if (!key.match(re)) {
        tmpChartSeries.push({"field": key})
      } else {
        console.log(key);
        xValFunction = function (d) {
          return d[key];
        };
      }
    }

    this.setState({
      data: useData,
      chartSeries: tmpChartSeries,
      xAxisValue: e.target.value,
      xValue: xValFunction
    })

  }

  handleYaxisChange(e) {
    console.log("Changing Y Axis value to: " + e.target.value);
    e.preventDefault();
    this.setState({
      yAxisValue: e.target.value
    })
  }

  handleChartTypeChange(e) {
    console.log("Changing chart type to: " + e.target.value);
    e.preventDefault();

    this.setState({
      chartType: e.target.value
    })
  }


  render() {

    let chart = null;

    if (this.state.chartType == 'bar') {

      // var xDomain = d3.extent(this.state.data, function(d){ return x(d) });
      // var xRange = [0, 550];

      chart =
        <DynamicBarChart width={550} height={300} data={this.state.data} series={this.state.chartSeries} xScale={this.state.xScale}
                         yTickFormat={yTickFormat} xValue={this.state.xValue}/>;
    } else {
      console.log(this.state.xValue);
      console.log(this.state.chartSeries);
      console.log(value);
      chart = <DynamicPieChart width={550} height={300} data={this.state.data} series={this.state.chartSeries} name={this.state.xValue}
                               value={value}/>;
    }

    return (
      <div className="container-fluid"
           style={{width: '100%', height: '200px', border: '4px', color: 'black', textAlign: 'center'}}>
        <div className="row">
          <div className="col-md-3">
            Series
            <AxisYInput handler={this.handleYaxisChange} xValue={this.state.yAxisValue}/>
          </div>
          <div className="col-md-6">
            TITLE AREA
          </div>
          <div className="col-md-3">
            Chart Type
            <ChartTypeInput handler={this.handleChartTypeChange} chartType={this.state.chartType}/>
          </div>
        </div>
        <div className="row">
          {chart}
        </div>
        <div className="row">
          <div className="col-md-3">
            X Axis
            <AxisXInput handler={this.handleXaxisChange} xValue={this.state.xAxisValue}/>
          </div>
          <div className="col-md-6">
            {this.state.xAxisValue.charAt(0).toUpperCase() + this.state.xAxisValue.slice(1)}
          </div>
        </div>
      </div>
    )
  }
}

export default DynamicChart
