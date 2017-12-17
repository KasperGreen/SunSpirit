import React, { PureComponent } from 'react'
import s from './css'

export default class PartyList extends PureComponent {

  render () {
    return (
      <nav className={s.wrapper}>
        <ul>
          <li>
            <h2>
              <time>06/10</time>

              Intelligent Sound
            </h2>
          </li>
          <li>
            <h2>
              <time>27/10</time>

              Ambient Sphere
            </h2>
          </li>
          <li>
            <h2>
              <time>09/11</time>

              Analog Voices
            </h2>
          </li>
          <li>
            <h2>
              <time>30/11</time>

              Broken Beats
            </h2>
          </li>
          <li>
            <h2>
              <time>21/12</time>

              Downtempo Rave
            </h2>
          </li>

        </ul>
      </nav>
    )
  }

}
