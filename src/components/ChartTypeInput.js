import React from 'react';

class ChartTypeInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <select className="selectpicker drop-select" data-style="dropdown" value={this.props.chartType}
              onChange={this.props.handler}>
        <option value="bar">Bar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
    )
  }
}

export default ChartTypeInput
