import React, { Component } from 'react'
import logo from './logo.svg'
import s from './App.css'
import Device from 'utils/Device'
import { MOBILE_TYPE, TABLET_TYPE } from 'constants/RESPONSIVE'

export default class App extends Component {
  render () {
    return (
      <div className={s.App}>
        <header className={s['App-header']}>
          <img src={logo} className={s['App-logo']} alt="logo" />
          <h1 className={s['App-title']}>Welcome to React</h1>
        </header>
        <p className={s['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }

  componentWillMount () {
    this.elastic()
  }

  elastic () {
    if (typeof window != 'undefined') {
      window.removeEventListener('resize', window.resize_elastic_listner_function)
      let baseWidth = 1280,
        maxWidth = 1400,
        baseSize = 10,
        $html = document.getElementsByTagName('html')[0]

      if (Device.getViewType() === MOBILE_TYPE) {
        baseWidth = 320
      }
      else if (Device.getViewType() === TABLET_TYPE) {
        baseWidth = 768
      }

      _helper()
      window.addEventListener('resize', _helper)

      function _helper () {
        const font_size = Math.min(window.innerWidth, maxWidth) / baseWidth * baseSize
        $html.style.fontSize = font_size + 'px'
        window.now_rem_size = font_size
      }
    }
  }

}


