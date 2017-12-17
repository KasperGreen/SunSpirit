import desktop_css from './Planets-desktop.css'
import mobile_css from './Planets-mobile.css'
import tablet_css from './Planets-tablet.css'
import tipper_css from './tipper.css'
import Device from 'utils/Device'


let s = tipper_css

if (true) s = Device.getPlatformCSS(desktop_css, mobile_css, tablet_css)

export default s
