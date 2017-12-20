import React, { PureComponent } from 'react'
import s from './css'
import background_url from 'static/images/PartyList_background.jpg'
import _ from 'lodash'

const partys = [
  {
    date: '06/10',
    name: 'Intelligent Sound'
  },
  {
    date: '27/10',
    name: 'Ambient Sphere'
  },
  {
    date: '09/11',
    name: 'Analog Voices',
  },
  {
    date: '30/11',
    name: 'Broken Beats'
  },
  {
    date: <span>21/12 <sup className={s.time}>19<span className={'animated_dots'}>:</span>30</sup></span>,
    name: 'Downtempo Rave',
    active: true
  },

].reverse()

export default class PartyList extends PureComponent {

  render () {
    const {
      state: {
        loaded
      }
    } = this
    return (
      <nav className={loaded ? s.loaded_wrapper : s.wrapper}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        @keyframes time_dots_blinking {
  0% {
    opacity: 1;
  }
  80% {
    opacity: .9;
  }
  100% {
    opacity: 0;
  }
}

.animated_dots {
  animation: time_dots_blinking 1s ease-in-out infinite;
}
`
          }}
        />
        <div className={s.blured_background} style={{backgroundImage: `url(${background_url})`}} />
        <ul className={s.list}>
          {_.map(partys, ({date, name, active}, key) => {
            return (
              <li
                key={key}
                className={active ? s.active_party : s.party}
              >
                <time className={s.date}>
                  {date}
                </time>
                <h2 className={s.name}>
                  {name}
                </h2>
              </li>
            )
          })}
        </ul>
      </nav>
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
