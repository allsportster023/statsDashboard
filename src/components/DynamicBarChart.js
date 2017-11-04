import React from 'react';
import {BarStackChart} from 'react-d3-basic';


class DynamicBarChart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BarStackChart
        data={this.props.data}
        width={this.props.width}
        height={this.props.height}
        chartSeries={this.props.series}
        x={this.props.xValue}
        xScale={this.props.xScale}
        yTickFormat={this.props.yTickFormat}
        showLegend={false}
        showXGrid={false}
        showYGrid={false}
      />
    )
  }
}

export default DynamicBarChart

// {/*xDomain={this.props.xDomain}*/}
// {/*xRange={this.props.xRange}*/}
// xAxisTickInterval={{unit: 'year', interval: 1}}
