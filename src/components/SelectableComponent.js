import React from 'react';
import ToggleButton from 'react-toggle-button';

class SelectableComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div id="selectableComponent">
        <a className="glyphicon glyphicon-list pad14 top-align" onClick={this.props.changeType.bind(this, 'table')} style={{cursor: 'pointer'}}/>
        <a className="top-align" onClick={this.props.changeType.bind(this, 'table')} style={{cursor: 'pointer'}}>Table</a>
        <ToggleButton
          containerStyle={{display: "inline-flex", margin: "0px 10px"}}
          value={ this.props.tableSelected }
          onToggle={ this.props.changeType }
          inactiveLabel={''}
          activeLabel={''}
          colors={{
            activeThumb: {
              base: 'rgb(250,250,250)',
            },
            inactiveThumb: {
              base: 'rgb(153,153,153)',
            },
            active: {
              base: 'rgb(65,66,68)',
              hover: 'rgb(95,96,98)',
            },
            inactive: {
              base: 'rgb(65,66,68)',
              hover: 'rgb(95,96,98)',
            }
          }}
        />

        <a className="top-align" onClick={this.props.changeType.bind(this, 'graph')} style={{cursor: 'pointer'}}>Graph</a>
        <a className="glyphicon glyphicon-equalizer pad14_left top-align" onClick={this.props.changeType.bind(this, 'graph')} style={{cursor: 'pointer'}}/>
      </div>
    )
  }
}

export default SelectableComponent
