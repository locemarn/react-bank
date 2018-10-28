import React, { Component } from 'react'

import InputValue from './inputValue/InputValue'

import './form.css'

class Form extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTransaction()
  }


  render() {
    return (
      <div>
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
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="textarea1">Description</label>
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
                value={this.props.typeTransaction}
                onChange={this.props.changeType}
              />
              <span>Credit</span>
            </label>
            <label>
              <input
                name="group1"
                type="radio" 
                value={this.props.typeTransaction}  
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