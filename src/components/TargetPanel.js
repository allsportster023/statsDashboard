import React from 'react';
//import Chosen from 'react-chosen-r';
import TargetList from './TargetList';
import SourceCheckbox from './SourceCheckbox'

class TargetListPanel extends React.Component {

  render() {

    return (
      <div>
        Search
        <div>

          <div>
            <TargetList/>
          </div>








        </div>

      </div>
    )}
}



export default TargetListPanel



//
//          <select className="chosen" data-order="true" name="multiselect[]" id="multiselect" multiple="true">
//              <option value="1">One</option>
//              <option value="2">Two</option>
//              <option value="3">Three</option>
//              <option value="4">Four</option>
//              <option value="5">Five</option>
//          </select>



//            <Chosen defaultValue={["Apple"]} width="92px" data-placeholder="Select..." multiple>
//
//            </Chosen>
