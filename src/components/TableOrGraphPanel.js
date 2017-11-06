import React from 'react';
import TablePanel from './TablePanel';
import DynamicChart from './DynamicChart';
import SelectableComponent from './SelectableComponent';
import Collapsible from 'react-collapsible';

class TableOrGraphPanel extends React.Component {

  constructor(props) {
    super(props);

    this.toggleDrawType = this.toggleDrawType.bind(this);

    console.log("TableOrGraph constructor");

    this.state = {
      tableSelected: false
    };

  }

  toggleDrawType(whichOne) {
    console.log("Toggling");
    console.log(this.state.tableSelected);

    if (typeof whichOne === 'string') {
      if (whichOne === 'graph')
        this.setState({tableSelected: true});
      else
        this.setState({tableSelected: false});
    } else {
      this.setState({tableSelected: !this.state.tableSelected});
    }
  }

  render() {

    let whatToDraw = null;
    if (this.state.tableSelected) {
      whatToDraw = <TablePanel sources={this.props.sources} timeframe={this.props.timeframe}
                               categories={this.props.categories} codes={this.props.codes}
                               colorMap={this.props.colorMap} inView={this.state.tableSelected}/>;
    } else {
      whatToDraw = <DynamicChart sources={this.props.sources} timeframe={this.props.timeframe}
                                   categories={this.props.categories} codes={this.props.codes}
                                   colorMap={this.props.colorMap} inView={!this.state.tableSelected}/>;
    }

    return (
      <div>
        <Collapsible trigger="Additional Displays">
          <SelectableComponent changeType={this.toggleDrawType} tableSelected={this.state.tableSelected}/>
          {whatToDraw}
        </Collapsible>
      </div>
    )
  }
}

export default TableOrGraphPanel

/*

 */
