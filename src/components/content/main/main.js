import React, { Component } from 'react'

import urls from '../../../utils/urls'

import './main.css'

class Main extends Component {
  render() {
    return (
      <div className="container buttons center">
        <a className="btn-floating btn-large waves-effect waves-light teal pulse" href={urls.add.path}>
          <i className="material-icons">add</i>
        </a>
        <a
          className="btn-floating btn-large waves-effect waves-light teal pulse" href={urls.list.path}>
          <i className="material-icons">list</i>
        </a>
      </div>
    )
  }
}

export default Main