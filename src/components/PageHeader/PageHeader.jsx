import React, { PureComponent } from 'react'
import s from './css'
import { Planets } from 'exportComponents'

import nebulas from 'components/Nebula'

export default class PageHeader extends PureComponent {
  state = {
    active_background_url: nebulas[0]
  }

  render () {
    const {
      state: {
        active_background_url
      }
    } = this
    return (
      <header
        style={{backgroundImage: `url(${active_background_url})`}}
        className={s.wrapper}
      >
        <Planets />
      </header>
    )
  }

  loadNextBg = () => {
    console.log('Запущен loanNextBg')
    console.log(this.nebulas.length, ' — this.nebulas.length | ')
    console.log(this.nebulas, ' — this.nebulas | ')

    if (this.nebulas.length > 0) {

      let bg = this.nebulas.shift()
      let downloadingImage = new Image()
      downloadingImage.src = bg

      downloadingImage.addEventListener('load', () => {
        this.setState({active_background_url: bg})
        this.loadNextBg()
      })
    }
  }
  nebulas = nebulas

  componentWillMount () {
    this.loadNextBg()
  }
}