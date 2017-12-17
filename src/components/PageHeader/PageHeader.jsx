import React, { PureComponent } from 'react'
import s from './css'

import nebulas from 'components/Nebula'

export default class PageHeader extends PureComponent {
  state = {
    active_background_url: nebulas[0]
  }

  render () {
    const {
      state: {
        active_background_url
      },
      onClick
    } = this
    return (
      <header
        {...{onClick}}
        style={{backgroundImage: `url(${active_background_url})`}}
        className={s.wrapper}
      >


      </header>
    )
  }

  componentWillMount () {
    this.loadNextBg()
  }

  loadNextBg = () => {
    console.log('Запущен loanNextBg')
    console.log(this.nebulas.length, ' — this.nebulas.length | ')
    console.log(this.nebulas, ' — this.nebulas | ')
    
    if (this.nebulas.length > 0) {
      
      let bg = this.nebulas.shift()
      let downloadingImage = new Image()
      downloadingImage.src = bg

      downloadingImage.addEventListener("load", () => {
        this.setState({active_background_url: bg})
        this.loadNextBg()
      })
    }
  }
  nebulas = nebulas
  onClick = () => {
    this.setState({active_background_url: nebula2})
  }
}
