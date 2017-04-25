import React from 'react';
import CheckboxItem from './CheckboxItem';

class CodeSelectionPanel extends React.Component {

  constructor(props) {
    super(props);

    this.handleCodeCheck = this.handleCodeCheck.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelectNone = this.handleSelectNone.bind(this);

    this.isBoxChecked = this.isBoxChecked.bind(this);

    this.initialCodeArray = [];
    this.selectedCodeArray = [];

  }

  componentDidMount() {

    //TODO Query SOLR to get unique codes
    this.initialCodeArray = ["Code1", "Code2", "Code3", "Code4", "Code5", "Code6", "Code7", "Code8", "Code9", "Code10",];

    this.selectedCodeArray = this.initialCodeArray.slice();
    //Send new data to parent for initialization
    this.props.handler(this.selectedCodeArray);

  }

  isBoxChecked(box){
    if(box == true || box == false) {
      return box;
    } else {
      return this.selectedCodeArray.includes(box);
    }
  }

  handleSelectAll(evt){

    evt.preventDefault();
    this.selectedCodeArray = this.initialCodeArray.slice();


    this.props.handler(this.selectedCodeArray);
  }

  handleSelectNone(evt){

    evt.preventDefault();
    this.selectedCodeArray = [];

    this.props.handler(this.selectedCodeArray);
  }


  handleCodeCheck(e) {

    if(e.target.checked){
      this.selectedCodeArray.push(e.target.id)
    } else {
      this.selectedCodeArray.splice(this.selectedCodeArray.indexOf(e.target.id),1);
    }

    //Send new data to parent
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

            {this.initialCodeArray.map(function (code) {
              return (
                <CheckboxItem handler={handler} value={code} key={code} checked={isBoxChecked(code)}/>
              )
            })}

          </div>
        </form>
      </div>
    )
  }
}

export default CodeSelectionPanel
