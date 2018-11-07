import React, { Component } from 'react'

import FirebaseService from '../../../services/FirebaseService'

import './list.css'

class List extends Component {

  remove = (id) => {
    FirebaseService.remove(id, 'transactions');
  }

  getList() {
    const list = this.props.list || []
    return (
      list.map((i, k) => {
        const partial = list.slice(0, k + 1)
        const t = partial.reduce((acm, item) => {
          return acm + parseFloat(item.value)
        }, 0)

        return <tr key={i.key}>
                  <td>R$ {i.value}</td>
                  <td>{i.description}</td>
                  <td>{!i.type ? 'credit' : i.type}</td>
                  <td>{t}</td>
                  <td>

                    <button 
                      className="btn-floating btn-small waves-effect waves-light red"
                      onClick={() => this.remove(i.key)}
                    >
                      <i className="material-icons">delete</i>

                    </button>
                  </td>
                </tr>
      })
    )
  }
  

  render() {
    return (
      <div className="center">
        <h2>Transactions</h2>
        <table className="centered responsive-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
              <th>Type</th>
              <th>Partial Value</th>
              <th>Delete</th>
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