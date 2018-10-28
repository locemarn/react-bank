import React, { Component } from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueTransaction: '0.00',
      typeTransaction: 'credit'
    }
  }

  changeValue = (e) => {
    this.setState({
      ...this.state,
      valueTransaction: e.target.value
    })
  }

  changeType = (e) => {
    this.setState({
      ...this.state,
      typeTransaction: e.target.value
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
          changeType={this.changeType}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
