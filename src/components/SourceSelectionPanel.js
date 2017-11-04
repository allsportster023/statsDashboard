import React from 'react';
import axios from 'axios';
import CheckboxItem from './CheckboxItem';

class SourceSelectionPanel extends React.Component {

  constructor(props) {
    super(props);


    this.handleSourceCheck = this.handleSourceCheck.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelectNone = this.handleSelectNone.bind(this);

    this.isBoxChecked = this.isBoxChecked.bind(this);

    this.state = {initialSourceArray: []};

    this.selectedSourceArray = [];
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      this.selectedSourceArray = this.state.initialSourceArray.slice();
      // Send new data to parent on initialization
      this.props.handler(this.selectedSourceArray);
    }
  }

  componentWillMount() {
    const _this = this;
    axios.get('http://localhost:8983/solr/statsDashboard/select?facet.field=Source&facet.query=*&facet=on&indent=on&q=*:*&rows=0&wt=json')
      .then(function (d) {
        const theArray = d.data.facet_counts.facet_fields.Source;
        for (var i = 1; i <= theArray.length; i += 1)
          theArray.splice(i, 1);

        _this.setState({
          initialSourceArray: theArray.sort()
        });
      });
  }

  isBoxChecked(box) {
    if (box == true || box == false) {
      return box;
    } else {
      return this.selectedSourceArray.includes(box);
    }
  }

  handleSelectAll(evt) {
    evt.preventDefault();
    this.selectedSourceArray = this.state.initialSourceArray.slice();


    this.props.handler(this.selectedSourceArray);
  }

  handleSelectNone(evt) {
    evt.preventDefault();
    this.selectedSourceArray = [];

    this.props.handler(this.selectedSourceArray);
  }

  handleSourceCheck(e) {
    if (e.target.checked) {
      this.selectedSourceArray.push(e.target.id);
    } else {
      this.selectedSourceArray.splice(this.selectedSourceArray.indexOf(e.target.id), 1);
    }

    // Send new data to parent
    this.props.handler(this.selectedSourceArray);
  }

  render() {
    const handler = this.handleSourceCheck;
    const isBoxChecked = this.isBoxChecked;

    return (
      <div>
        <div>
          <a href="#" className="selectAllNone" onClick={this.handleSelectAll}>SELECT ALL</a>
          <a href="#" className="selectAllNone" onClick={this.handleSelectNone}>SELECT NONE</a>
        </div>
        <form role="form">
          <div className="form-group">

            {this.state.initialSourceArray.map(function (source) {
              return (
                <CheckboxItem handler={handler} value={source} key={source} checked={isBoxChecked(source)}/>
              );
            })}

          </div>
        </form>
      </div>
    );
  }
}


export default SourceSelectionPanel;
