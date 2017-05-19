import React from 'react';

class MapLegend extends React.Component {

  constructor(props) {
    super(props);

    this.sources = [];
    this.colorMap = {};
    this.alreadyUpdated = false;

  }

  componentDidUpdate(nextProps, nextState) {

    //Only update the sources one time when we have all of them
    if(this.props != nextProps && !this.alreadyUpdated) {

      if(this.props.sources.length != 0 && this.props.colorMap){
        this.sources = this.props.sources.slice();
        this.colorMap = this.props.colorMap;

        this.alreadyUpdated = true;

      }
    }
  }

  render() {

    let colorMap = this.props.colorMap;

    return (
      <div className="container-fluid">
        <div className="row keyBar">
          {this.sources.map(function(src){
            return <div key={src} className="col-xs-2"><div className="keyBox" style={{background: colorMap[src]}}><div className="keyLabel">{src}</div></div></div>;
          })}
        </div>
      </div>
    )}
}

export default MapLegend
