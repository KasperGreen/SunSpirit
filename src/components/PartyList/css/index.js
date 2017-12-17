import desktop_css from './PartyList-desktop.css'
import mobile_css from './PartyList-mobile.css'
import tablet_css from './PartyList-tablet.css'
import tipper_css from './tipper.css'
import Device from 'utils/Device'


let s = tipper_css

if (true) s = Device.getPlatformCSS(desktop_css, mobile_css, tablet_css)

export default s
