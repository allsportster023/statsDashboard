import React from 'react';
import Map from './Map';
import MapLegend from './MapLegend';
import Sidebar from './Sidebar';
import DynamicChart from './DynamicChart';

class AppMain extends React.Component {

  constructor(props) {
    super(props);

    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleTimeframeChange = this.handleTimeframeChange.bind(this);


    this.state = {
      sources: [],
      timeframe: [Date.now() - (86400000 * 7), Date.now()],
      categories: [],
      codes: []
    }
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("AppMain: Component Did Update");

    if (this.state.sources.length != 0 &&
      this.state.timeframe.length != 0 &&
      this.state.categories.length != 0 &&
      this.state.codes.length != 0) {

      console.log(this.state.sources);
      console.log(this.state.timeframe);
      console.log(this.state.categories);
      console.log(this.state.codes);


    } else {
      console.log("One of the states is empty. No need to fetch anything");
    }
  }

  handleSourceChange(e) {

    console.log("AppMain: Handling SOURCE change");
    this.setState({
      sources: e
    });
  }


  handleCategoryChange(e) {

    console.log("Handling CATEGORY change");
    this.setState({
      categories: e
    });
  }

  handleCodeChange(e) {

    console.log("AppMain: Handling CODE change");
    this.setState({
      codes: e
    });
  }

  handleTimeframeChange(start, end) {

    console.log("AppMain: Handling TIME change");

    const timeArr = this.state.startEndTimes;

    //If the start time is to be chagned
    if (start) {
      timeArr[0] = start;
    }

    //If the end time is to be changed
    if (end) {
      timeArr[1] = end;
    }

    console.log(timeArr);

    //Make sure that the end time is after the start time
    if (timeArr[0] < timeArr[1]) {

      this.setState({
        startEndTimes: timeArr
      });

    } else {
      //Alert the user that they have to select an
      //end that is later than the start time
      console.log("AppMain: End is before start");
      alert("End Time must be after Before Time");

    }
  }


  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar">
            <Sidebar sourceHandler={this.handleSourceChange} timeHandler={this.handleTimeframeChange}
                     categoryHandler={this.handleCategoryChange} codeHandler={this.handleCodeChange}
                     selectedSources={this.state.sources} startEndTimes={this.state.timeframe}
                     categoryArray={this.state.categories} codeArray={this.state.codes}/>
          </div>
          <div className="col-md-5 map">
            <Map size={{width: '100%', height: '50vh'}}/>
            <MapLegend />
          </div>
          <div className="col-md-4 upperChart">
            {/*<DynamicChart />*/}
          </div>
          <div className="col-md-4 lowerChart">
            {/*<DynamicChart />*/}
          </div>
        </div>
      </div>
    )
  }
}

export default AppMain
