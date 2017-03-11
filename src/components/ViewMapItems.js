import React from 'react';
import Map from './Map';
import Sidebar from './Sidebar';

const  ViewMapItems = React.createClass({
  render: function() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar">
            <Sidebar />
          </div>
          <div className="col-md-9 map">
            <Map size={{width: '73vw', height: '75vh'}} />
            <div className="col-md-12 keyBar">
              <div className="row">
                <div className="col-xs-1">
                  <div className="keyBox turquoise">
                    <div className="keyLabel">SRC1</div>
                  </div>
                </div>
                <div className="col-xs-1">
                  <div className="keyBox purple">
                    <div className="keyLabel">SRC2</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox maroon">
                    <div className="keyLabel">SRC3</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox medBlue">
                    <div className="keyLabel">SRC4</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox magenta">
                    <div className="keyLabel">SRC5</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox green">
                    <div className="keyLabel">SRC6</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox yellow">
                    <div className="keyLabel">SRC7</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox pink">
                    <div className="keyLabel">SRC8</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox lime">
                    <div className="keyLabel">SRC9</div>
                  </div>
                </div>
                <div className="col-sm-1">
                  <div className="keyBox orange">
                    <div className="keyLabel">SRC0</div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    )}
});

export default ViewMapItems
