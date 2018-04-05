import * as React from 'react';
import ListDetail from './Components/Containers/listDetail';
// import ItemDetail from './Components/Containers/itemDetail';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ListDetail />
        {/* <ItemDetail /> */}
      </div>
    );
  }
}
export default App;