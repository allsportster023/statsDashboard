import React from 'react';
import axios from 'axios';
import CheckboxItem from './CheckboxItem';

class CodeSelectionPanel extends React.Component {

  constructor(props) {
    super(props);

    this.handleCodeCheck = this.handleCodeCheck.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelectNone = this.handleSelectNone.bind(this);

    this.isBoxChecked = this.isBoxChecked.bind(this);

    this.selectedCodeArray = [];

    this.state = {initialCodeArray: []};
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      this.selectedCodeArray = this.state.initialCodeArray.slice();
      // Send new data to parent for initialization
      this.props.handler(this.selectedCodeArray);
    }
  }

  componentWillMount() {
    const _this = this;
    axios.get('http://localhost:8983/solr/statsDashboard/select?facet.field=Code&facet.query=*&facet=on&indent=on&q=*:*&rows=0&wt=json')
      .then(function (d) {
        const theArray = d.data.facet_counts.facet_fields.Code;
        for (var i = 1; i <= theArray.length; i += 1)
          theArray.splice(i, 1);

        _this.setState({
          initialCodeArray: theArray.sort()
        });
      });
  }

  isBoxChecked(box) {
    if (box == true || box == false) {
      return box;
    } else {
      return this.selectedCodeArray.includes(box);
    }
  }

  handleSelectAll(evt) {
    evt.preventDefault();
    this.selectedCodeArray = this.state.initialCodeArray.slice();


    this.props.handler(this.selectedCodeArray);
  }

  handleSelectNone(evt) {
    evt.preventDefault();
    this.selectedCodeArray = [];

    this.props.handler(this.selectedCodeArray);
  }


  handleCodeCheck(e) {
    if (e.target.checked) {
      this.selectedCodeArray.push(e.target.id);
    } else {
      this.selectedCodeArray.splice(this.selectedCodeArray.indexOf(e.target.id), 1);
    }

    // Send new data to parent
    this.props.handler(this.selectedCodeArray);
  }


  render() {
    const handler = this.handleCodeCheck;
    const isBoxChecked = this.isBoxChecked;

    return (
      <div>
        <div>
          <a href="#" className="selectAllNone" onClick={this.handleSelectAll}>SELECT ALL</a>
          <a href="#" className="selectAllNone" onClick={this.handleSelectNone}>SELECT NONE</a>
        </div>
        <form role="form">
          <div className="form-group">

            {this.state.initialCodeArray.map(function (code) {
              return (
                <CheckboxItem handler={handler} value={code} key={code} checked={isBoxChecked(code)}/>
              );
            })}

          </div>
        </form>
      </div>
    );
  }
}

export default CodeSelectionPanel;
