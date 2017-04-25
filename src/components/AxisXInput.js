import React from 'react';

class AxisXInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select value={this.props.xValue} onChange={this.props.handler}>
        <option value="date">Date</option>
        <option value="source">Source</option>
        <option value="code">Code</option>
        <option value="category">Category</option>
      </select>
    )
  }
}

export default AxisXInput
