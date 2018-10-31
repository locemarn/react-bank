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
      typeTransaction: '',
      listTransaction: [],
      descriptionTransaction: '',
      data: [],
      total: 0
    }
  }

  toast = (msg, color) => {
    window.Materialize.toast(msg, 4000, color)
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

  changeDescription = (e) => {
    this.setState({
      ...this.state,
      descriptionTransaction: e.target.value
    })
  }

  updateTransactionList = () => {
    FirebaseService.getDataList(FirebaseNode, (list) => {

      const total = list.reduce((acm, item) => {
        return acm + parseFloat(item.value)
      }, 0)

      this.setState({
        ...this.state, 
        valueTransaction: defaultValue,
        listTransaction: list,
        total: total.toFixed(2)
      })
    })
  }

  addTransaction = (e) => {
    if ((this.state.valueTransaction === defaultValue) || !this.state.valueTransaction || !this.state.descriptionTransaction) {
      this.toast('Please, fill all inputs!', 'pink')
      return false
    }

    let newId = 0
    
    let value = this.state.typeTransaction === 'debit' ? this.state.valueTransaction*-1 : this.state.valueTransaction

    newId = FirebaseService.pushData(FirebaseNode, {
      'value': value,
      'description': this.state.descriptionTransaction,
      'type': this.state.typeTransaction
    })
    this.toast('Transaction added with success!', 'green')
    this.updateTransactionList()

    return newId
  }

  componentWillMount() {
    this.updateTransactionList()
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        
        <Content
          valueTransaction={this.state.valueTransaction}
          descriptionTransaction={this.state.descriptionTransaction}
          typeTransaction={this.state.typeTransaction}
          changeValue={this.changeValue}
          changeDescription={this.changeDescription}
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
