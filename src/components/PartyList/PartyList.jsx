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
    date: '21/12 19:30',
    name: 'Downtempo Rave',
    active: true
  },

]

export default class PartyList extends PureComponent {

  render () {
    return (
      <nav className={s.wrapper}>
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

}
