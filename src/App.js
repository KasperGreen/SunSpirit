import React, { Component } from 'react'
import { Main, PageHeader } from 'exportComponents'

export default class App extends Component {
  render () {
    return (
      <div id="page_wrapper" style={{height: '100%'}}>
        <PageHeader />
        <Main />

      </div>
    )
  }

}


