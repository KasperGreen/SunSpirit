import device_lib from './device.lib'
import {
  DESKTOP_TYPE,
  MOBILE_TYPE,
  TABLET_TYPE
} from 'constants/RESPONSIVE'

class Device {
  default_type = DESKTOP_TYPE
  type = this.default_type

  constructor() {
    if ( device_lib ) {
      if ( device_lib.tablet() && device_lib.portrait() ) {
        this.type = TABLET_TYPE
      }
      if ( device_lib.mobile() ) {
        this.type = MOBILE_TYPE
      }
    }
  }

  getViewType() {
    return this.type
  }

  isMobile() {
    return this.type === MOBILE_TYPE
  }

  notMobile() {
    return !this.isMobile()
  }

  isNotMobile() {
    return !this.isMobile()
  }

  isTablet() {
    return this.type === TABLET_TYPE
  }

  notTablet() {
    return !this.isTablet()
  }

  isNotTablet() {
    return !this.isTablet()
  }

  isDesktop() {
    return this.type === DESKTOP_TYPE
  }

  notDesktop() {
    return !this.isDesktop()
  }

  isNotDesktop() {
    return !this.isDesktop()
  }




  getPlatformCSS( desktop_css, mobile_css = desktop_css, tablet_css = desktop_css ) {
    switch (this.type) {
      case MOBILE_TYPE:
        return mobile_css
        break
      case TABLET_TYPE:
        return tablet_css
        break
      default:
        return desktop_css
    }

  }
}

let device = new Device()

export default device
