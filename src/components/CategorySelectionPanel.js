import React from 'react';
import CheckboxItem from './CheckboxItem';

class CategorySelectionPanel extends React.Component {

  constructor(props) {
    super(props);

    this.handleCategoryCheck = this.handleCategoryCheck.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelectNone = this.handleSelectNone.bind(this);

    this.isBoxChecked = this.isBoxChecked.bind(this);

    this.initialCategoryArray = [];
    this.selectedCategoryArray = [];
  }

  componentWillMount() {

    //TODO Query SOLR to get unique categories
    this.initialCategoryArray = ["Jet", "Propeller", "TurboJet", "Electric", "Piston", "Multi", "Complex"];

    this.selectedCategoryArray = this.initialCategoryArray.slice();
    //Send new data to parent for initialization
    this.props.handler(this.selectedCategoryArray);

  }

  isBoxChecked(box){
    if(box == true || box == false) {
      return box;
    } else {
      return this.selectedCategoryArray.includes(box);
    }
  }

  handleSelectAll(evt){

    evt.preventDefault();
    this.selectedCategoryArray = this.initialCategoryArray.slice();

    this.props.handler(this.selectedCategoryArray);
  }

  handleSelectNone(evt){

    evt.preventDefault();
    this.selectedCategoryArray = [];

    this.props.handler(this.selectedCategoryArray);
  }


  handleCategoryCheck(e) {

    if(e.target.checked){
      this.selectedCategoryArray.push(e.target.id)
    } else {
      this.selectedCategoryArray.splice(this.selectedCategoryArray.indexOf(e.target.id),1);
    }

    //Send new data to parent
    this.props.handler(this.selectedCategoryArray);

  }

  render() {

    const handler = this.handleCategoryCheck;
    const isBoxChecked = this.isBoxChecked;

    return (
      <div>
        <div>
          <a href="#" className="selectAllNone" onClick={this.handleSelectAll}>SELECT ALL</a>
          <a href="#" className="selectAllNone" onClick={this.handleSelectNone}>SELECT NONE</a>
        </div>
        <form role="form">
          <div className="form-group">

            {this.initialCategoryArray.map(function (category) {
              return (
                <CheckboxItem handler={handler} value={category} key={category} checked={isBoxChecked(category)}/>
              )
            })}

          </div>
        </form>
      </div>
    )
  }
}


export default CategorySelectionPanel
