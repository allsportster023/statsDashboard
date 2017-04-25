import React from 'react';
import CheckboxItem from './CheckboxItem';

class SourceSelectionPanel extends React.Component {

  constructor(props) {
    super(props);


    this.handleSourceCheck = this.handleSourceCheck.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelectNone = this.handleSelectNone.bind(this);

    this.isBoxChecked = this.isBoxChecked.bind(this);

    this.initialSourceArray = [];
    this.selectedSourceArray = [];
  }

  componentWillMount() {

    //TODO Query SOLR to get unique sources
    this.initialSourceArray = ["Books", "Online", "Magazines", "Journals", "Scholars", "Reports"];

    this.selectedSourceArray = this.initialSourceArray.slice();
    //Send new data to parent on initialization
    this.props.handler(this.selectedSourceArray);


  }

  isBoxChecked(box){
    if(box == true || box == false) {
      return box;
    } else {
      return this.selectedSourceArray.includes(box);
    }
  }

  handleSelectAll(evt){

   evt.preventDefault();
   this.selectedSourceArray = this.initialSourceArray.slice();


    this.props.handler(this.selectedSourceArray);
  }

  handleSelectNone(evt){

    evt.preventDefault();
    this.selectedSourceArray = [];

    this.props.handler(this.selectedSourceArray);
  }

  handleSourceCheck(e) {

    if (e.target.checked) {
      this.selectedSourceArray.push(e.target.id)
    } else {
      this.selectedSourceArray.splice(this.selectedSourceArray.indexOf(e.target.id), 1);
    }

    //Send new data to parent
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

            {this.initialSourceArray.map(function (source) {

              return (
                <CheckboxItem handler={handler} value={source} key={source} checked={isBoxChecked(source)}/>
              )
            })}

          </div>
        </form>
      </div>
    )
  }
}


export default SourceSelectionPanel
