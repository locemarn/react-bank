import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Form from './form/From'
import List from './list/List'
import urls from '../../utils/urls'

class Content extends Component {
  render() {
    return (
      <div>

        <Route
          exact
          path={urls.list.path}
          render={props => <List
            list={this.props.list}
            total='0'
          />}
        />

        <Route 
          exact
          path={urls.add.path}
          render={ props => <Form
              valueTransaction={this.props.valueTransaction}
              typeTransaction={this.props.typeTransaction}
              changeValue={this.props.changeValue}
              changeType={this.props.changeType}
              addTransaction={this.props.addTransaction}
            />
          }
        />
      </div>
    )
  }
}

export default Content