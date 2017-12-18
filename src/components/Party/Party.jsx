import React, { PureComponent } from 'react'
import s from './css'
import _ from 'lodash'
import bg_path from 'static/images/earth.jpg'

const artists = [
  {
    href: 'https://soundcloud.com/astronaut-ape',
    name: 'Astronaut Ape'
  }, {
    name: 'Coma Soul',
    href: 'https://soundcloud.com/comasoul'
  }, {
    name: 'Jati Div',
    href: 'https://soundcloud.com/jati_div'
  }, {
    name: '[special] Cloower Wooma',
    href: 'https://soundcloud.com/cloowerwooma',
    special: true
  },
]

export default class Party extends PureComponent {

  state = {
    loaded: false
  }

  timeout

  componentWillMount () {
    this.timeout = setTimeout(
      () => {
        this.setState({loaded: true})
      },
      1800)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  render () {

  const {
    state: {
      loaded
    }
  } = this
    return (
      <div className={loaded ? s.loaded_wrapper : s.wrapper}>
        <div className={s.background} style={{backgroundImage: `url(${bg_path})`}} />
        <article className={s.article}>
          <header>
            <h1 className={s.title}>
              Atmosphere 5.1.0.12
            </h1>
            <cite className={s.genre}>
              downtempo rave
            </cite>
          </header>
          <nav className={s.persons}>
            <ul>
              {_.map(artists, ({href, name, special}, key) => {
                return (
                  <li key={key}>
                    <a {...{href}}
                       target={'_blank'}
                       className={special ? s.special_person : s.person}
                    >{name}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </article>
      </div>
    )
  }

}
