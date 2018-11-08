import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputValue extends Component {

  onKeyPress = (e) => {
    const regex = /^[0-9]|[.]$/
    if (!regex.test(e.key)) {
      return e.preventDefault()
    }
  }

  onKeyUp = (e) => {
    let inputValue = e.target.value
    inputValue = inputValue.replace(/\./g, '')

    if (inputValue) {
      inputValue = parseInt(inputValue, 10).toString()
      let integerPart = inputValue.slice(0, -2)
      let decimalPart = inputValue.slice(-2)

      let zeroPart = ''
      zeroPart = inputValue.length === 1 ? '0.0' : zeroPart
      zeroPart = inputValue.length === 2 ? '0.' : zeroPart

      if (inputValue.length < 3) {
        e.target.value = zeroPart + decimalPart
      } else {
        e.target.value = integerPart + '.' + decimalPart
      }
    }
    this.props.changeValue(e)
  }

  render() {

    return (
      <div className="input-field col l3 s12 offset-l3">
        <i className="material-icons prefix">attach_money</i>
        <input
          type="text"
          id="autocomplete-input"
          className="autocomplete"
          value={this.props.value}
          onKeyPress={this.onKeyPress}
          onChange={this.onKeyUp}
          label={this.props.label}  
        />
        <label htmlFor="autocomplete-input">Value</label>
      </div>
    )
  }
}

InputValue.propTypes = {
  value: PropTypes.string.isRequired
}

export default InputValue