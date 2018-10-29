import React, { Component } from 'react'

import InputValue from './inputValue/InputValue'

import './form.css'

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    
    this.props.addTransaction()
    this.setState({
      ...this.state,
      descriptionTransaction: ''
    })

  }


  render() {
    return (
      <div>
        <div>
          <h2 className="center wrapper">Add Transaction</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12">
              <div className="row">

                <InputValue 
                  label='Value: '
                  required
                  value={this.props.valueTransaction}
                  changeValue={this.props.changeValue}
                />
            
                <div className="input-field col l3 s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <input 
                    id="description"
                    type="text"
                    className="validate"
                    requiredvalue={this.props.descriptionTransaction}
                    onChange={this.props.changeDescription}
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="center radios">
            <label>
              <input
                name="group1"
                type="radio"
                defaultChecked
                value='credit'
                onChange={this.props.changeType}
              />
              <span>Credit</span>
            </label>
            <label>
              <input
                name="group1"
                type="radio"
                value='debit'
                onChange={this.props.changeType}
              />
              <span>Debit</span>
            </label>
          </div>
          <div className="center">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
      )
  }
}

export default Form