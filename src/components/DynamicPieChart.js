import React from 'react';
import {PieChart} from 'react-d3-basic';

class DynamicPieChart extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PieChart
        data={this.props.data}
        width={this.props.width}
        height={this.props.height}
        chartSeries={this.props.series}
        value={this.props.value}
        name={this.props.name}
        showLegend={false}
        innerRadius={10}
      />
    )
  }
}

export default DynamicPieChart
