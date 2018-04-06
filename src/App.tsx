import * as React from 'react';
import FranchiseListings from './Components/Containers/FranchiseListings/franchiseListings';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FranchiseListings />
      </div>
    );
  }
}
export default App;