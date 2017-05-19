import React from 'react';
import axios from 'axios';

class TablePanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidUpdate(nextProps, nextState) {

    if(this.props != nextProps) {
      if (this.props.sources.length != 0 &&
        this.props.timeframe.length != 0 &&
        this.props.categories.length != 0 &&
        this.props.codes.length != 0 &&
        this.props.colorMap) {

          console.log("Creating TablePanel");

          this.getDataFromSolr();

      }
    }
  }

  getDataFromSolr() {
    const _this = this;
    const startUrl = this.createSolrQueryString();
    axios.get(startUrl)
      .then(function (d) {

          _this.setState({
            data: d.data.response.docs,
          })

      });

  }

  createSolrQueryString(){
    let solrQueryStr = "http://localhost:8983/solr/appData/select?wt=json&indent=true&rows=50&q=";

    solrQueryStr += "Source:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.sources);
    solrQueryStr += " AND Category:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.categories);
    solrQueryStr += " AND Code:";
    solrQueryStr += this.convertArrayToSolrSyntax(this.props.codes);
    solrQueryStr += " AND Date:["+new Date(this.props.timeframe[0]).toISOString()+" TO "+new Date(this.props.timeframe[1]).toISOString()+"]";

    return solrQueryStr;

  }

  convertArrayToSolrSyntax(arr) {

    let solrStr = "(";
    arr.forEach(function (d, i) {
      solrStr += d;

      if (i < arr.length - 1) {
        solrStr += " OR "
      }
    });

    solrStr += ")";

    return solrStr;

  }

  render() {

    return (
      <div>
        <div className="panel panel-default" id="panel1">
          <div className="panel-heading-blue" id="heading1">
            <h4 className="panel-title">
              <a className="glyphicon glyphicon-list pad14" href="#collapseTable"></a>
              <a className="accordion-toggle collapsed" data-toggle="collapse" href="#collapseTable">Table</a>
            </h4>
          </div>
          <div id="collapseTable" className="panel-collapse collapse">
            <div className="panel-body" style={{maxHeight: "30vh", overflowY: "scroll"}}>
              <table className="table table-hover table-bordered table-condensed">
                <thead>
                <tr>
                  <th>Date</th>
                  <th>Source</th>
                  <th>Category</th>
                  <th>Code</th>
                  <th>Location</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map(function (d, idx) {
                  return <tr key={idx}><td>{d.Date}</td><td>{d.Source}</td><td>{d.Category}</td><td>{d.Code}</td><td>{d.Location}</td></tr>;
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TablePanel
