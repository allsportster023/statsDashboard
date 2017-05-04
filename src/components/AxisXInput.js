import React from 'react';

class AxisXInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select value={this.props.xValue} onChange={this.props.handler}>
        <option value="Date">Date</option>
        <option value="Source">Source</option>
        <option value="Code">Code</option>
        <option value="Category">Category</option>
      </select>
    )
  }
}

export default AxisXInput
