import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Form from './form/From'
import List from './list/List'
import urls from '../../utils/urls'
import Main from './main/main'

class Content extends Component {
  render() {
    return (
      <div className="card darken-1">
        <div className="card-content white-text">
          <Route
            exact
            path={urls.home.path}
            render={props => <Main /> }
          />
            <Route
            exact path={urls.list.path}
            render={ props => <List 
              list={this.props.list}
              total='0'
              />
            }
          />
          
          <Route 
            exact path={urls.add.path}
            render={props=> <Form
                valueTransaction={this.props.valueTransaction}
                descriptionTransaction={this.props.descriptionTransaction}
                typeTransaction={this.props.typeTransaction}
                changeValue={this.props.changeValue}
                changeType={this.props.changeType}
                addTransaction={this.props.addTransaction}
              />
            
            }
          />  
        </div>   
      </div>
    )
  }
}

export default Content