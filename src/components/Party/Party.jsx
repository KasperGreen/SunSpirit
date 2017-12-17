import React, { PureComponent } from 'react'
import s from './css'


export default class Party extends PureComponent {


  render () {
    return (
      <article className={s.wrapper}>
        <header>
          <h1>Атмосфера 5.1.0</h1>
          <h2>downtempo rave</h2>
        </header>
        <nav className={s.persons}>
          <ul>
            <li>
              <h3>
                Astronaut Ape
              </h3>
            </li>
            <li>
              <h3>
                Coma Soul
              </h3>
            </li>
            <li>
              <h3>
                Jati Div
              </h3>
            </li>
          </ul>
        </nav>
      </article>
    )
  }

}
