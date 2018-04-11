import * as React from 'react';
import FranchiseListingsPage from './Components/Containers/FranchiseListings/franchiseListingPage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FranchiseListingsPage />
      </div>
    );
  }
}
export default App;