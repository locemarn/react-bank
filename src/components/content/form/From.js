import React, { Component } from 'react'

import './form.css'

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col s12">
              <div className="row">

              {/* WILL CREATE A COMPONENT */}
                <div className="input-field col l3 s12 offset-l3">
                  <i className="material-icons prefix">attach_money</i>
                  <input type="text" id="autocomplete-input" className="autocomplete" />
                  <label htmlFor="autocomplete-input">Value</label>
                </div>
                {/* -- */}
                <div className="input-field col l3 s12">
                  <i className="material-icons prefix">mode_edit</i>
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    required
                    value={this.props.valueTransaction}
                    onChange={this.props.changeValue}  
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