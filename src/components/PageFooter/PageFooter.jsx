import React, { PureComponent } from 'react'
import s from './css'
import bg from 'static/images/nebula/nebula_4.svg'
import logo from 'static/images/logo.svg'
import map_image from 'static/images/icons/map.svg'
import vk_image from 'static/images/icons/vk.svg'

export default class PageFooter extends PureComponent {

  render () {

    return (
      <footer
        style={{backgroundImage: `url(${bg})`}}
        className={s.wrapper}
      >
        <nav className={s.nav}>
          <ul className={s.flex}>
            <li>
              <a
                target={'_blank'}
                href={'https://www.google.ru/maps/place/%D0%9D%D0%B8%D0%B6%D0%BD%D1%8F%D1%8F+%D0%A1%D1%8B%D1%80%D0%BE%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+10%D1%817,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+105120/@55.752278,37.6663272,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54a937abb10cb:0x3734501f7f335c13!8m2!3d55.752278!4d37.6685159'}
                className={s.link}
              >

                <div>
                  <img className={s.link_icon} src={map_image} alt={'Иконка: отметка на карте'} />
                </div>
                <div>
                  улица Нижняя Сыромятническая,
                  <wbr />дом 10, строение 7,
                  <br />3 этаж, RODNYA
                </div>
              </a>

              <button className={s.logo_wrapper}>
                <img
                  src={'https://pp.userapi.com/c319431/v319431746/4609/m5qd5hLK2Ko.jpg'}
                  alt={'Логотип родни'}
                  className={s.rodnya}
                />
              </button>
            </li>
            <li className={s.sun_spirit_side}>

              <a
                target={'_blank'}
                href='https://vk.com/atmospherfive' className={s.vk_link}
              >

                <div>
                  <img className={s.link_icon} src={vk_image} alt={'Иконка: отметка на карте'} />
                </div>
                <div>
                  vk.com/AtmospherFive
                </div>
              </a>


              <button className={s.logo_wrapper}>
                <img
                  src={logo}
                  style={{
                    filter: 'invert(100%) drop-shadow(.22rem .12rem .42rem #febebe)'
                  }}
                  alt={'Логотип SunSpirit'}
                />
              </button>
            </li>
          </ul>
        </nav>

      </footer>
    )
  }

}
