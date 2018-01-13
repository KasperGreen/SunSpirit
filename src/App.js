import React, { Component } from 'react'
import bgg from 'static/images/bgg.jpg'
export default class App extends Component {
  render () {
    return (
      <div id="page_wrapper" style={{
        height: '100%',
        background: `url(${bgg}) center center no-repeat`,
        backgroundSize: 'contain'
      }}>

      </div>
    )
  }

}


