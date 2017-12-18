import React, { Component } from 'react'
import logo from './logo.svg'
import s from './App.css'
import Device from 'utils/Device'
import {Switch, Route, Link} from 'react-router-dom'
import { MOBILE_TYPE, TABLET_TYPE } from 'constants/RESPONSIVE'
import {PageHeader, Main} from 'exportComponents'

export default class App extends Component {
  render () {
    return (
      <div className={s.App}>
        <PageHeader/>
        <Main/>
      </div>
    )
  }



}


