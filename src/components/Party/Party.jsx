import React, { PureComponent } from 'react'
import s from './css'
import _ from 'lodash'
import bg_path from 'static/images/earth.jpg'

const artists = [
  {
    href: 'https://soundcloud.com/astronaut-ape',
    name: 'Astronaut Ape',
    studio: 'Microcosmos Rec.'
  }, {
    name: 'Coma Soul',
    href: 'https://soundcloud.com/comasoul',
    studio: 'Leveldva'
  }, {
    name: 'Jati Div',
    studio: 'Leveldva',
    href: 'https://soundcloud.com/jati_div'
  }, {
    name: '[special] Cloower Wooma',
    studio: 'Ultimae Rec., Altar Rec.',
    href: 'https://soundcloud.com/cloowerwooma',
    special: true
  },
]

export default class Party extends PureComponent {



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
              Atmosphere <span className={s.version}>5.1.0.12</span>
            </h1>
            <cite className={s.genre}>
              downtempo rave
            </cite>
          </header>
          <nav className={s.persons}>
            <ul>
              {_.map(artists, ({href, name, special, studio}, key) => {
                return (
                  <li key={key}>
                    <a {...{href}}
                       target={'_blank'}
                       className={special ? s.special_person : s.person}
                    >
                      <cite className={s.studio}>
                        {studio}
                      </cite>

                      {name}

                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </article>
      </div>
    )
  }

  timeout

  componentWillMount () {
    this.timeout = setTimeout(
      () => {
        this.setState({loaded: true})
      },
      1800)
  }

  state = {
    loaded: false
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

}
