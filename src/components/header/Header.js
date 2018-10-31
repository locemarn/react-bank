import React, { Component } from 'react'
import urls from '../../utils/urls'
class Header extends Component {
  render() {
    const style_header = {
      marginBottom: '10%'
    }
    return (
      <nav style={style_header}>
        <div className="left">
          <a className="btn-floating btn-large waves-effect waves-light" href={urls.home.path}>
            <i className="material-icons teal">home</i>
          </a>
        </div>
        <div className="nav-wrapper teal">
          <a href="#!" className="brand-logo center">React Bank</a>
        </div>
      </nav>
    )
  }
}

export default Header

