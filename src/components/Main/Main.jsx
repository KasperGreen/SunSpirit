import React, { PureComponent } from 'react'
import s from './css'
import { Party } from 'exportComponents'


export default class Main extends PureComponent {


  render () {
    return (
      <main className={s.wrapper}>
        <Party/>
      </main>
    )
  }




}
