import * as React from 'react';
import ListDetail from './Components/Containers/listDetail';
// import ItemDetail from './Components/Containers/itemDetail';
// import FranchiseListings from './Components/Containers/franchiseListings';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <FranchiseListings /> */}
        <ListDetail />
        {/* <ItemDetail /> */}
      </div>
    );
  }
}
export default App;