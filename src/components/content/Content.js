import React, { Component } from 'react'

import Form from './form/From'

class Content extends Component {
  render() {
    return (
      <div>
        <h1>Content</h1>

        <Form
          valueTransaction={this.props.valueTransaction}
          typeTransaction={this.props.typeTransaction}
          changeValue={this.props.changeValue}
        />
      </div>
    )
  }
}

export default Content