import React from 'react';
import axios from 'axios';
import CheckboxItem from './CheckboxItem';

class CategorySelectionPanel extends React.Component {

  constructor(props) {
    super(props);

    this.handleCategoryCheck = this.handleCategoryCheck.bind(this);

    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelectNone = this.handleSelectNone.bind(this);

    this.isBoxChecked = this.isBoxChecked.bind(this);

    this.selectedCategoryArray = [];

    this.state = {initialCategoryArray: []}
  }

  componentDidUpdate(nextProps, nextState) {

    if (this.state != nextState) {

      this.selectedCategoryArray = this.state.initialCategoryArray.slice();
      //Send new data to parent for initialization
      this.props.handler(this.selectedCategoryArray);

    }
  }

  componentWillMount() {

    const _this = this;
    axios.get("http://localhost:8983/solr/appData/select?facet.field=Category&facet.query=*&facet=on&indent=on&q=*:*&rows=0&wt=json")
      .then(function (d) {
        const theArray = d.data.facet_counts.facet_fields.Category;
        for (var i = 1; i <= theArray.length; i += 1)
          theArray.splice(i, 1);

        _this.setState({
          initialCategoryArray: theArray.sort()
        });
      });
  }

  isBoxChecked(box) {
    if (box == true || box == false) {
      return box;
    } else {
      return this.selectedCategoryArray.includes(box);
    }
  }

  handleSelectAll(evt) {

    evt.preventDefault();
    this.selectedCategoryArray = this.state.initialCategoryArray.slice();

    this.props.handler(this.selectedCategoryArray);
  }

  handleSelectNone(evt) {

    evt.preventDefault();
    this.selectedCategoryArray = [];

    this.props.handler(this.selectedCategoryArray);
  }


  handleCategoryCheck(e) {

    if (e.target.checked) {
      this.selectedCategoryArray.push(e.target.id)
    } else {
      this.selectedCategoryArray.splice(this.selectedCategoryArray.indexOf(e.target.id), 1);
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

            {this.state.initialCategoryArray.map(function (category) {
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
