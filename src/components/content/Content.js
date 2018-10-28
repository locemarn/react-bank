import React, { Component } from 'react'

import Form from './form/From'

class Content extends Component {
  render() {
    return (
      <div>

        <Form
          valueTransaction={this.props.valueTransaction}
          typeTransaction={this.props.typeTransaction}
          changeValue={this.props.changeValue}
          changeType={this.props.changeType}
          addTransaction={this.props.addTransaction}
        />
      </div>
    )
  }
}

export default Content