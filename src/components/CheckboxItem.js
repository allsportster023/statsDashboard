import React from 'react';

class CheckboxItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="control-group">
      	<label className="control control--checkbox" key={this.props.value}>
      		<input type="checkbox" onChange={this.props.handler} id={this.props.value} checked={this.props.checked}/> {this.props.value}
      		<div className="control__indicator"></div>
      	</label>
      </div>
    )
  }
}

export default CheckboxItem
