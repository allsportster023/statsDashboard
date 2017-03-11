import React from 'react';

const TargetList = React.createClass({
	render: function() {

      $("#checkAll").click(function () {
      console.log("Clicked");
          $(".check").setAttribute('checked',"checked" );
      });

	return (




<div className="container">
  <div className="col-md-5 check-row">
    <form role="form">
      <div className="form-group">

        <div className="checkbox">
          <label>
            <input type="checkbox" className="check" id="checkAll"/> Check All
          </label>
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" className="check"/> Check me out
          </label>
        </div>


        <div className="checkbox">
          <label>
            <input type="checkbox" className="check"/> Check me out
          </label>
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" className="check"/> Check me out
          </label>
        </div>
      </div>
    </form>
  </div>
</div>
)
}
});













export default TargetList


//
//
//
//      var Row = React.createClass({
//        getInitialState: function() {
//          return {
//            checked: false
//          };
//        },
//        checkIt: function() {
//          this.props.callback(this.props.index, !this.props.checked);
//          return;
//        },
//        render: function() {
//          return (
//            <tr>
//              <td><input type="checkbox" checked={this.props.checked} onChange={this.checkIt} /></td>
//              <td>{this.props.obj.foo}</td>
//            </tr>
//          );
//        }
//      });
//
//      var Table = React.createClass({
//        getInitialState: function() {
//          var rowState =[];
//          for(var i = 0; i < this.props.rows.length; i++) {
//            rowState[i] = false;
//          }
//          return {
//            checkAll: false,
//            rowState:rowState
//          };
//        },
//        checkRow: function (id,value) {
//          this.state.rowState[id] = value;
//          if (this.state.checkAll) {
//            this.state.checkAll = !this.state.checkAll;
//          }
//          this.setState({
//            rowState: this.state.rowState,
//            checkAll: this.state.checkAll
//          });
//        },
//        checkAll: function () {
//          var rowState =[];
//          var checkState = !this.state.checkAll;
//          for(var i = 0; i < this.state.rowState.length; i++) {
//            rowState[i] = checkState;
//          }
//
//          this.state.checkAll = checkState;
//
//          this.setState({
//            rowState: rowState,
//            checkAll: this.state.checkAll
//          });
//        },
//        render: function() {
//          var self = this;
//
//          var rows = _.map(this.props.rows, function( row,index) {
//            return (<Row obj={row} index={index} key={row.id} checked={self.state.rowState[index]} callback={self.checkRow} />);
//          });
//          return (
//            <div className="table-holder container">
//            <input type="checkbox" checked={this.state.checkAll} onChange={this.checkAll} />
//            <table className="table">{rows}</table>
//            </div>
//          );
//        }
//      });
//
//      var rows = [
//        {
//          'id' : 1,
//          'foo': 'bar'
//        },
//        {
//          'id' : 2,
//          'foo': 'baarrrr'
//        },
//        {
//          'id' : 3,
//          'foo': 'baz'
//        }
//      ];
//  }
//
//});
