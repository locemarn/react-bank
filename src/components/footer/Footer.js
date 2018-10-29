import React, { Component } from 'react'

import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer teal footer">
        <div className="footer-copyright">
          <div className="container">
            Created by<a className="grey-text text-lighten-4" href="https://locemarn.github.io/marcelo-nogueira/" target='blank'> Marcelo Nogueira</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer