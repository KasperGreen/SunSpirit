import React, { PureComponent } from 'react'
import s from './css'
import { Party, PartyList } from 'exportComponents'

export default class Main extends PureComponent {

  state = {
    loaded: false
  }

  render () {
    const {
      state: {
        loaded
      }
    } = this
    return (
      <main className={loaded ? s.loaded_wrapper : s.wrapper}>
        <Party />
        <PartyList />
      </main>
    )
  }

  timeout

  componentWillMount () {
    this.timeout = setTimeout(
      () => {
        this.setState({loaded: true})
      },
      842)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

}
