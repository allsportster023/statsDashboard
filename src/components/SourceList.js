import React from 'react';
import Checkbox from './Checkbox';




const SourceList = React.createClass({
	render: function() {
		console.log("PROPS IN SL");
		console.log(this.props);

		var source = this.props.sources.map(function(source, index){
			return <SourceItem key={ index } sourceId={ source }/>
		});
		return (
			<div> Source List goes here:<br/>
					{ source }
					{ source1 }
					{ source2 }

			</div>


      const items = [
        'A1A',
        'B2B',
        'C3C',
        'D4D',
        'E5E',
        'F6F',
        'G7G',
        'H8H',
        'I9I',
        'J10J',
      ];

      class SourceList extends Component {
        componentWillMount = () => {
          this.selectedCheckboxes = new Set();
        }

        toggleCheckbox = label => {
          if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
          } else {
            this.selectedCheckboxes.add(label);
          }
        }

        handleFormSubmit = formSubmitEvent => {
          formSubmitEvent.preventDefault();

          for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
          }
        }

        createCheckbox = label => (
          <Checkbox
                  label={label}
                  handleCheckboxChange={this.toggleCheckbox}
                  key={label}
              />
        )

        createCheckboxes = () => (
          items.map(this.createCheckbox)
        )

        render() {
          return (
            <div className="container">
              <div className="row">
                <div className="col-sm-12">

                  <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}

                    <button className="btn btn-default" type="submit">Save</button>
                  </form>

                </div>
              </div>
            </div>
          );
        }
      }






		)
	}
});



var SourceItem = React.createClass({
  render:function(){
    var sourceId = this.props.sourceId;
    return(
      <div>
        <strong>SourceId: </strong>{sourceId}<br/>
      </div>
    );
  }
});
export default SourceList;






//const SourceList = React.createClass({
//	render: function() {
//		console.log("PROPS IN SL");
//		console.log(this.props);
//
//		var source = this.props.sources.map(function(source, index){
//			return <SourceItem key={ index } sourceId={ source }/>
//		});
//		return (
//			<div> Source List goes here:<br/>
//					{ source }
//					{ source1 }
//					{ source2 }
//
//			</div>
//
//		)
//	}
//});
