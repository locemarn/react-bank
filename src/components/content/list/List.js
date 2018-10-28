import React, { Component } from 'react'

class List extends Component {
  render() {
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
              <td>$0.87</td>
              <td>Eclair</td>
            </tr>
            <tr>
              <td>$3.76</td>
              <td>Jellybean</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default List