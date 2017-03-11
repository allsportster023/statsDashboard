import React from 'react';




var InputCheckbox = React.createClass({
  getDefaultProps: function () {
    return {
      checked: false
    }
  },
  render: function () {
    return (
    <input
           checked={this.props.checked}
           type='checkbox'
           {...this.props}/>
    )
  }
})


