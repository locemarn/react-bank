import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import urls from '../../../utils/urls'

class Main extends Component {
  render() {
    return (
      <div className="container buttons center">
        <button 
          className="btn-floating btn-large waves-effect waves-light teal" 
          name="add"
          component={props =>
            <Link to={urls.add.path}
            {...props}
          />
          }  
        >
          <i className="material-icons">add</i>
        </button>
        <button
          className="btn-floating btn-large waves-effect waves-light teal"
          name="list"
          component={props =>
            <Link to={urls.list.path}
            {...props}
          />
          }  
        >
          <i className="material-icons">list</i>
        </button>
      </div>
    )
  }
}

export default Main