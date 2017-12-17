import React, { PureComponent } from 'react'
import s from './css'

import nebulas from 'components/Nebula'

export default class PageHeader extends PureComponent {


  render () {
    return (
      <main className={s.wrapper}>
        
      </main>
    )
  }



  loadNextBg = () => {

    if (this.nebulas.length > 0) {

      let bg = this.nebulas.shift()
      let downloadingImage = new Image()
      downloadingImage.src = bg

      downloadingImage.addEventListener('load', () => {
        this.setState(
          {
            active_background_url: bg,
            loaded: this.nebulas.length === 0 ? true : false
          })
        this.loadNextBg()
      })
    }
  }
  nebulas = nebulas

  componentWillMount () {
    this.loadNextBg()
  }
}
