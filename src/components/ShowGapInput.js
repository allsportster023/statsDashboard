import React from 'react';

class ShowGapInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <select value={this.props.showGaps} onChange={this.props.handler}>
        <option value={true}>True</option>
        <option value={false}>False</option>
      </select>
    )
  }
}

export default ShowGapInput
