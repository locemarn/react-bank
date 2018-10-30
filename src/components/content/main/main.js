import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import urls from '../../../utils/urls'

class Main extends Component {
  render() {
    return (
      <div className="container buttons center">
        <a className="btn-floating btn-large waves-effect waves-light teal" href={urls.add.path}>
          <i className="material-icons">add</i>
        </a>
<<<<<<< HEAD
        <a
          className="btn-floating btn-large waves-effect waves-light teal" href={urls.list.path}>
=======
        <a className="btn-floating btn-large waves-effect waves-light teal pulse" href={urls.list.path}>
>>>>>>> master
          <i className="material-icons">list</i>
        </a>
      </div>
    )
  }
}

export default Main