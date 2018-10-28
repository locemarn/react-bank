import React, { Component } from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueTransaction: '',
      typeTransaction: 'credit'
    }
  }

  changeValue = (e) => {
    this.setState({
      ...this.state,
      valueTransaction: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <Content
          valueTransaction={this.state.valueTransaction}
          typeTransaction={this.state.typeTransaction}
          changeValue={this.changeValue}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
