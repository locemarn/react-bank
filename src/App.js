import React, { Component } from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'
import FirebaseService from './services/FirebaseService';

const defaultValue = '0.00'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueTransaction: defaultValue,
      typeTransaction: 'credit',
      listTransaction: [],
      data: []
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

  addTransaction = (e) => {
    if ((this.state.valueTransaction === defaultValue) || !this.state.valueTransaction) {
      return false
    }

    let list = this.state.listTransaction
    list.push(this.state.valueTransaction)

    this.setState({
      ...this.state,
      valueTransaction: defaultValue,
      listTransaction: list
    })
  }

  componentDidMount = () => {
    FirebaseService.getDataList('transactions', (dataReceived) => {
      this.setState({
        listTransaction: dataReceived
      })
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
          addTransaction={this.addTransaction}
          listTransaction={this.state.listTransaction}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
