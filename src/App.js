import React, { Component } from 'react';
import { Copy } from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Copy
            centered
            optimizedLength>
            Lorem ipsum dolor sit amet nuncum helibot Bellicose regimen milkshake typescript
          </Copy>
      </div>
    );
  }
}

export default App;
