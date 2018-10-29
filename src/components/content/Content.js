import React, { Component } from 'react'

import { Route } from 'react-router-dom'

import Form from './form/Form'
import List from './list/List'
import urls from '../../utils/urls'
import Main from './main/main'

import './content.css'

class Content extends Component {
  render() {
    return (
      <div className="content row">
      
        <div className="card darken-1 col l8 offset-l2 s10 offset-s1">
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
                total={this.props.total}
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
                  changeDescription={this.props.changeDescription}
                  changeType={this.props.changeType}
                  addTransaction={this.props.addTransaction}
                />
              
              }
            />  
          </div>   
        </div>
      </div>
    )
  }
}

export default Content