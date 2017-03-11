import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';


const App = ({ children }) => (
  <div>
    <header>
      <img className="logoSize"src="../../images/APPdata_logo.png"></img>
      <Link to="/table">Table</Link>
      <Link to="/map">Map</Link>
      <Link to="/viewMapItems">Items</Link>
    </header>
    <section>
      {children || 'Welcome to APP document summary'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
