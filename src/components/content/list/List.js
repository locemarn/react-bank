import React, { Component } from 'react'

import './list.css'

class List extends Component {

  getList() {
    const list = this.props.list || []
    return (
      list.map((i, k) => (
        <tr key={k}>
          <td>R$ {i.value}</td>
          <td>{i.description}</td>
        </tr>
      ))
    )
  }
  render() {
    this.getList()
    return (
      <div className="content">
        <h1>Transactions</h1>
        <table className="centered responsive-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.getList()}
          </tbody>
        </table>
        <h2>Total: R$ {this.props.total}</h2>
      </div>
    )
  }
}

export default List