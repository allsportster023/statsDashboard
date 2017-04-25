import React from 'react';

class ChartTypeInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <select value={this.props.chartType} onChange={this.props.handler}>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
    )
  }
}

export default ChartTypeInput
