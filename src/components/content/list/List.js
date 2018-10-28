import React, { Component } from 'react'

import './list.css'

class List extends Component {

  getList() {
    const list = this.props.list || []
    return (
      list.map((i, k) => {
        return (i, k)
      })
    )
  }
  render() {
    this.getList()
    return (
      <div className="content">
        <h1>Transactions</h1>
        <table>
          <thead>
            <tr>
                <th>Value</th>
                <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>k</td>
              <td>i</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default List