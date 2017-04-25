import React from 'react';
import Map from './Map';
import MapLegend from './MapLegend';
import Sidebar from './Sidebar';
import DynamicChart from './DynamicChart';

class AppMain extends React.Component {

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar">
            <Sidebar />
          </div>
          <div className="col-md-5 map">
            <Map size={{width: '100%', height: '50vh'}}/>
            <MapLegend />
          </div>
          <div className="col-md-4 upperChart">
            <DynamicChart />
          </div>
          <div className="col-md-4 lowerChart">

          </div>
        </div>
      </div>
    )
  }
}

export default AppMain
