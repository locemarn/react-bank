import React, { Component } from 'react'

import FirebaseService from './services/FirebaseService';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'

const defaultValue = '0.00'
const FirebaseNode = 'transactions'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      valueTransaction: defaultValue,
      typeTransaction: 'credit',
      listTransaction: [],
      data: [],
      total: 0
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

    let newId = 0

    let value = this.state.typeTransaction === 'debit' ? this.state.valueTransaction*-1 : this.state.valueTransaction

    newId = FirebaseService.pushData(FirebaseNode, {
      'value': value
    })

    this.setState({
      ...this.state,
      valueTransaction: defaultValue
    })

    return newId
  }

  componentWillMount() {
    FirebaseService.getDataList(FirebaseNode, (list) => {
      const total = list.reduce(function(acm, item) {
        return acm + parseFloat(item.value)
      }, 0)
      this.setState({
        ...this.state,
        valueTransaction: defaultValue,
        listTransaction: list,
        total: total
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
          list={this.state.listTransaction}
          total={this.state.total}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
