import React, { PureComponent } from 'react'
import s from './css'
import { Party, PartyList } from 'exportComponents'


export default class Main extends PureComponent {


  render () {
    return (
      <main className={s.wrapper}>
        <Party/>
        <PartyList/>
      </main>
    )
  }




}
