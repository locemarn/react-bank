import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Marcelo</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
