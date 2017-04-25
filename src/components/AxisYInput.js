import React from 'react';

class AxisYInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select value={this.props.yValue} onChange={this.props.handler}>
        <option value="source">Source</option>
        <option value="code">Code</option>
        <option value="category">Category</option>
        <option value="category">Date</option>
      </select>
    )
  }
}

export default AxisYInput
