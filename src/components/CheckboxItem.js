import React from 'react';

class CheckboxItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="checkbox" key={this.props.value}>
        <label>
          <input type="checkbox" className="check" onChange={this.props.handler} id={this.props.value} checked={this.props.checked}/> {this.props.value}
        </label>
      </div>
    )
  }
}

export default CheckboxItem
