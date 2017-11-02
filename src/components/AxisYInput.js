import React from 'react';

class AxisYInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select className="selectpicker drop-select" data-style="dropdown" value={this.props.yValue} onChange={this.props.handler}>
        <option value="Source">Source</option>
        <option value="Code">Code</option>
        <option value="Category">Category</option>
        <option value="Date">Date</option>
      </select>
    )
  }
}

export default AxisYInput
