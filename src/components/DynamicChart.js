import React from 'react';
import axios from 'axios';
import StackedChart from './StackedChart';

import AxisYInput from './AxisYInput';
import AxisXInput from './AxisXInput';
import ChartTypeInput from './ChartTypeInput';
import ShowGapInput from './ShowGapInput';
import MultiLevelPieChart from './MultiLevelPieChart';

const flatten = function (input) {
  var flattened = [];

  for (var i = 0; i < input.length; ++i) {
    for (var j = 0; j < input[i].length; ++j)
      flattened.push(input[i][j]);
  }
  return flattened;
};

const unique = function (arr) {
  var n = {}, r = [];
  for (var i = 0; i < arr.length; i++) {
    if (!n[arr[i]]) {
      n[arr[i]] = true;
      r.push(arr[i]);
    }
  }
  return r;
};

class DynamicChart extends React.Component {

  constructor(props) {
    super(props);

    this.handleXaxisChange = this.handleXaxisChange.bind(this);
    this.handleYaxisChange = this.handleYaxisChange.bind(this);
    this.handleChartTypeChange = this.handleChartTypeChange.bind(this);
    this.handleGapChange = this.handleGapChange.bind(this);

    this.convertArrayToSolrSyntax = this.convertArrayToSolrSyntax.bind(this);
    this.createSolrQueryString = this.createSolrQueryString.bind(this);
    this.createPivotCall = this.createPivotCall.bind(this);
    this.createSolrQueryString = this.createSolrQueryString.bind(this);

    this.convertSolrDataToSeries = this.convertSolrDataToSeries.bind(this);
    this.convertSolrDataToBarData = this.convertSolrDataToBarData.bind(this);
    this.convertSolrDataToPieData = this.convertSolrDataToPieData.bind(this);

    this.state = {
      data: [],
      xAxisValue: 'Date',
      yAxisValue: 'Source',
      chartType: 'bar',
      showGaps: true,
      xScale: 'ordinal'

    }
  }

  componentDidMount() {
    this.getDataFromSolr();
  }

  convertArrayToSolrSyntax(arr) {

    let solrStr = "(";
    arr.forEach(function (d, i) {
      solrStr += d;

      if (i < arr.length - 1) {
        solrStr += " OR "
      }
    });

    solrStr += ")";

    return solrStr;

  }

  createSolrQueryString() {
    let solrQueryStr = "http://localhost:8983/solr/statsDashboard/select?wt=json&indent=true&rows=0&q=";

    solrQueryStr += "Source:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.sources);
    solrQueryStr += " AND Category:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.categories);
    solrQueryStr += " AND Code:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.codes);
    solrQueryStr += " AND Date:[" + new Date(this.props.timeframe[0]).toISOString() + " TO " + new Date(this.props.timeframe[1]).toISOString() + "]";

    return solrQueryStr;

  }

  createPivotCall(urlStr) {

    if (this.state.showGaps) {
      urlStr += "&facet.pivot.mincount=0"
    }

    urlStr += "&facet=true&facet.sort=index&facet.pivot=";
    urlStr += this.state.xAxisValue + "," + this.state.yAxisValue;

    return urlStr;
  }

  getDataFromSolr() {
    const _this = this;
    const startUrl = this.createSolrQueryString();
    const pivotUrl = this.createPivotCall(startUrl);
    console.log(pivotUrl);
    axios.get(pivotUrl)
      .then(function (d) {

        const newData = d.data.facet_counts.facet_pivot[Object.keys(d.data.facet_counts.facet_pivot)[0]];

        if (_this.state.chartType == 'bar') {
          _this.setState({
            data: _this.convertSolrDataToBarData(newData),
          })

        } else if (_this.state.chartType == 'pie') {
          _this.setState({
            data: _this.convertSolrDataToPieData(newData),
          })

        }
      });

  }

  componentDidUpdate(nextProps, nextState) {

    if (this.props != nextProps) {
      if (this.props.sources.length != 0 &&
        this.props.timeframe.length != 0 &&
        this.props.categories.length != 0 &&
        this.props.codes.length != 0) {

        console.log("DynamicChart: componentDidUpdate Props");

        this.getDataFromSolr();

      } else {

      }
    }

    if (this.state != nextState) {
      console.log("DynamicChart: componentDidUpdate State");

      if (this.state.xAxisValue != nextState.xAxisValue ||
        this.state.yAxisValue != nextState.yAxisValue) {
        console.log("DynamicChart: componentDidUpdate State: axisValue");

        this.getDataFromSolr();
      } else if (this.state.chartType != nextState.chartType) {
        console.log("DynamicChart: componentDidUpdate State: chartType");

        this.getDataFromSolr();
      } else if (this.state.showGaps != nextState.showGaps) {
        console.log("DynamicChart: componentDidUpdate State: chartType");

        this.getDataFromSolr();
      }

    }
  }

  convertSolrDataToSeries(data) {

    const tmpChartSeries = data.map(function (d) {
      return d.pivot.map(function (e) {
        return e.value
      });
    });

    return unique(flatten(tmpChartSeries)).map(function (d) {
      return {"field": d}
    });

  }

  convertSolrDataToBarData(data) {

    let barChartDataArray = [];
    const _this = this;

    // const xValues = data.map(function (d) {
    data.forEach(function (d) {

      let barChartDataObj = {};

      //Set the value field to be the XAxis field

      if (isNaN(new Date(d.value).valueOf())) {
        barChartDataObj[_this.state.xAxisValue] = d.value;
      } else {
        let m = new Date(d.value);
        barChartDataObj[_this.state.xAxisValue] = m.getUTCFullYear() + "-" +
          ("0" + (m.getUTCMonth() + 1)).slice(-2) + "-" +
          ("0" + m.getUTCDate()).slice(-2);

      }


      //For each pivot parameter
      d.pivot.forEach(function (e) {
        barChartDataObj[e.value] = e.count;
      });

      barChartDataArray.push(barChartDataObj);

    });

    console.log("BarChartData:");
    console.log(barChartDataArray);

    return barChartDataArray;

  }

  convertSolrDataToPieData(data) {

    console.log(data);

    let innerChartData = [];
    let outerChartData = [];

    data.forEach(function (d) {

      innerChartData.push({"name": d.value, "value": d.count});

      d.pivot.forEach(function (e) {
        outerChartData.push({"name": e.value, "value": e.count})
      });
    });

    console.log("PieChartData:");
    console.log([innerChartData, outerChartData]);

    return [innerChartData, outerChartData];

  }

  handleXaxisChange(e) {
    console.log("Changing X Axis value to: " + e.target.value);

    this.setState({
      xAxisValue: e.target.value
    });

  }

  handleYaxisChange(e) {
    console.log("Changing Y Axis value to: " + e.target.value);

    this.setState({
      yAxisValue: e.target.value
    });

  }

  handleGapChange(e) {
    console.log("Changing Gap value to: ");
    console.log(typeof e.target.value);

    this.setState({
      showGaps: (e.target.value == 'true')
    });

  }

  handleChartTypeChange(e) {
    console.log("Changing chart type to: " + e.target.value);

    this.setState({
      chartType: e.target.value,
      data: []
    })
  }


  render() {

    let chart = null;

    if (this.state.chartType == 'bar' && this.state.data.length != 0) {

      chart = <StackedChart width={475} height={280} data={this.state.data} xField={this.state.xAxisValue}
                            colorMap={this.props.colorMap}/>;

    } else if (this.state.chartType == 'pie' && this.state.data.length != 0) {

      chart = <MultiLevelPieChart width={475} height={280} data={this.state.data} colorMap={this.props.colorMap}/>

    }


    return (
      <div className="container-fluid chart-title">
        <div className="row">
          <div className="col-md-12 chart-header">
            {this.state.xAxisValue + " by " + this.state.yAxisValue}
          </div>
          <div className="col-md-3 drop-title">
            {this.state.chartType == 'bar' ? "Series" : "Outer"}
            <AxisYInput handler={this.handleYaxisChange} xValue={this.state.yAxisValue}/>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-3 drop-title">
            Chart Type
            <ChartTypeInput handler={this.handleChartTypeChange} chartType={this.state.chartType}/>
          </div>
        </div>

        <div className="row">
          {chart}
        </div>

        <div className="row">
          <div className="col-md-3 drop-title">
            {this.state.chartType == 'bar' ? "X Axis" : "Inner"}
            <AxisXInput handler={this.handleXaxisChange} xValue={this.state.xAxisValue}/>
          </div>
          <div className="col-md-5">
            {/*{this.state.xAxisValue.charAt(0).toUpperCase() + this.state.xAxisValue.slice(1)}*/}
          </div>
          <div className="col-md-3 drop-title">
            {this.state.chartType == 'bar' ? "Show Gaps" : null}
            {this.state.chartType == 'bar' ?
              <ShowGapInput handler={this.handleGapChange} showGaps={this.state.showGaps}/> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default DynamicChart
