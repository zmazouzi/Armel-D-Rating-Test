import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import map from './Map';


class App extends Component {
  
  state = { landingPageOpen: true }
  
  render() {
    const {landingPageOpen} = this.state;
    return (
      <div className="App">
       <button onClick={ () => {this.setState({ landingPageOpen: !landingPageOpen })}}> go to listing page</button>
            { landingPageOpen? <div id='map-container'> <map></map> </div> : <div> other component here </div>}
      </div>
    );
  }
}

export default App;
