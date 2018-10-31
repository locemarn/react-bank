import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import './main.css'

import urls from '../../../utils/urls'
class Main extends Component {
  render() {
    return (
      <div>
        <div className="container buttons center">
          <a className="btn-floating btn-large waves-effect waves-light teal pulse" href={urls.add.path}>
            <i className="material-icons">add</i>
          </a>
          
          <a className="btn-floating btn-large waves-effect waves-light teal pulse" href={urls.list.path}>
            <i className="material-icons">list</i>
          </a>

        </div>
        <div className="usage center">
        <h4>Welcome to a simple React Bank web app</h4>
        <p>You can choose add a transaction or list or all transactions.</p>
        <p>If you choose add a new transaction, you will be redirect to a form page. The form must be filled all inputs for be submited.
        You can also choose list to see all your transactions, sorted by values, types, your sould and delete some transaction if you want.</p>
        
        <p><strong>Enjoy it! =D</strong></p>
        
        
        </div>
      </div>
    )
  }
}

export default Main