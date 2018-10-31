import React, { Component } from 'react'

class Footer extends Component {
  
  render() {
    const style_footer = {
      position: 'fixed',
      paddingTop: '0px',
      width: '100%',
      top: '95%',
      zIndex: '10'
    }
    return (
      <footer className="page-footer teal center" style={style_footer}>
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